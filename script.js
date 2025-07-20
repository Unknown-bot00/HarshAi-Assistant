async function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value;
    if (!message) return;
    appendMessage("You", message);
    input.value = "";

    const response = await fetch("/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
    });
    const data = await response.json();
    appendMessage("HarshAi", data.reply);
}

function appendMessage(sender, text) {
    const chatLog = document.getElementById("chatLog");
    const msg = document.createElement("div");
    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatLog.appendChild(msg);
    chatLog.scrollTop = chatLog.scrollHeight;
}
