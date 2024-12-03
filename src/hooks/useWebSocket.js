import { useEffect, useCallback } from 'react';
import { websocketService } from '../services/websocketService';

export const useWebSocket = (token, onMessage) => {
    const connect = useCallback(async () => {
        try {
            await websocketService.connect(token);
        } catch (error) {
            console.error('Failed to connect to WebSocket:', error);
        }
    }, [token]);

    useEffect(() => {
        if (token) {
            connect();
            const subscriptionId = websocketService.subscribe(onMessage);

            return () => {
                websocketService.unsubscribe(subscriptionId);
                websocketService.disconnect();
            };
        }
    }, [token, onMessage, connect]);

    const sendMessage = useCallback((message) => {
        websocketService.send(message);
    }, []);

    return { sendMessage };
};
