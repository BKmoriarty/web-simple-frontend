class WebSocketService {
  constructor() {
    this.ws = null;
    this.url = "ws://localhost:8081/ws"; // Update this with your WebSocket server URL
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
    this.listeners = new Map();
  }

  connect(token) {
    return new Promise((resolve, reject) => {
      try {
        // Include the auth token in the WebSocket URL or as a protocol
        this.ws = new WebSocket(`${this.url}?token=${token}`);

        this.ws.onopen = () => {
          console.log("WebSocket Connected");
          this.reconnectAttempts = 0;
          resolve();
        };

        this.ws.onmessage = (event) => {
          const data = JSON.parse(event.data);
          // Notify all listeners
          this.listeners.forEach((callback) => callback(data));
        };

        this.ws.onclose = () => {
          console.log("WebSocket Disconnected");
          this.attemptReconnect(token);
        };

        this.ws.onerror = (error) => {
          console.error("WebSocket Error:", error);
          reject(error);
        };
      } catch (error) {
        console.error("WebSocket Connection Error:", error);
        reject(error);
      }
    });
  }

  attemptReconnect(token) {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      console.log(
        `Attempting to reconnect... (${this.reconnectAttempts}/${this.maxReconnectAttempts})`
      );
      setTimeout(() => {
        this.connect(token);
      }, 3000); // Wait 3 seconds before reconnecting
    }
  }

  disconnect() {
    if (this.ws) {
      this.ws.close();
    }
  }

  subscribe(callback) {
    const id = Date.now().toString();
    this.listeners.set(id, callback);
    return id;
  }

  unsubscribe(id) {
    this.listeners.delete(id);
  }

  send(message) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(message));
    } else {
      console.error("WebSocket is not connected");
    }
  }
}

export const websocketService = new WebSocketService();
