import { useEffect } from "react";
import Layout from "./help/Layout";
import { useWebSocket } from "../hooks/useWebSocket";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

export default function Home() {
  const { currentUser } = useContext(AuthContext);
  const token = currentUser.accessToken;

  const handleMessage = (message) => {
    console.log("Received message:", message);
  };

  const { sendMessage } = useWebSocket(token, handleMessage);

  // Example of sending a message
  const sendExampleMessage = () => {
    sendMessage({ type: "hello", content: "Hello Server!" });
  };

  return (
    <>
      <div className="Auth-form-container">
        <div>
          <h1>Home</h1>
          <Layout />
          <button onClick={sendExampleMessage}>Send Test Message</button>
        </div>
      </div>
    </>
  );
}
