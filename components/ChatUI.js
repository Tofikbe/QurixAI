import { useState } from "react";

export default function ChatUI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);

  // Send message to API
  const sendMessage = async () => {
    if (!input && !image) return;

    const formData = new FormData();
    formData.append("message", input);
    if (image) formData.append("image", image);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setMessages([...messages, { role: "user", text: input, img: image }, { role: "ai", text: data.reply }]);
    setInput("");
    setImage(null);
  };

  return (
    <div className="w-full max-w-2xl bg-white shadow-xl rounded-xl flex flex-col h-[90vh]">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`my-2 ${msg.role === "user" ? "text-right" : "text-left"}`}>
            {msg.img && <img src={URL.createObjectURL(msg.img)} alt="uploaded" className="w-20 h-20 rounded-md inline-block mr-2" />}
            <span className="bg-gray-200 px-3 py-2 rounded-lg inline-block">{msg.text}</span>
          </div>
        ))}
      </div>

      {/* Footer Input */}
      <div className="flex items-center border-t p-2 gap-2">
        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          id="imageUpload"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <label htmlFor="imageUpload" className="cursor-pointer p-2 bg-gray-200 rounded-lg">📷</label>

        {/* Text Input */}
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 border rounded-lg px-3 py-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {/* Send Button */}
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Send</button>
      </div>
    </div>
  );
            }
