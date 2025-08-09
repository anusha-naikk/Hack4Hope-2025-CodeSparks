import React, { useState } from "react";

const CHAT_URL =
  import.meta.env.VITE_CHATBOT_URL || "https://e2831d0cead8.ngrok-free.app/";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={styles.container}>
      {!isOpen && (
        <button style={styles.chatButton} onClick={() => setIsOpen(true)}>
          💬
        </button>
      )}

      {isOpen && (
        <div style={styles.chatWindow}>
          <div style={styles.chatHeader}>
            <span>Chat with us</span>
            <button style={styles.closeButton} onClick={() => setIsOpen(false)}>
              ✖
            </button>
          </div>

          <iframe src={CHAT_URL} title="Chatbot" style={styles.iframe} />
        </div>
      )}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1000,
  },
  chatButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: 60,
    height: 60,
    fontSize: 24,
    cursor: "pointer",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
  },
  chatWindow: {
    width: 350,
    height: 450,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
  },
  chatHeader: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
  },
  closeButton: {
    background: "transparent",
    border: "none",
    color: "white",
    fontSize: 16,
    cursor: "pointer",
  },
  iframe: {
    flex: 1,
    border: "none",
  },
};
