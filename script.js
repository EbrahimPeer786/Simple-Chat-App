// Boolean variable to track message theme (dark or light)
let isDark = true;

function sendMessage() {
    // Get the input field and chat window elements
    let input = document.getElementById("userInput");
    let chatWindow = document.getElementById("chatWindow");
    // Prevent sending empty messages (if input is just spaces)
    if (input.value.trim() === "") return;
    // Create a new message div
    let message = document.createElement("div");

    // Add 'message' class and apply either 'dark' or 'light' theme based on isDark
    message.classList.add("message", isDark ? "dark" : "light");
    // Set the message text to the input value
    message.innerText = input.value;
    // Append the new message to the chat window
    chatWindow.appendChild(message);
    // Auto-scroll to the latest message
    chatWindow.scrollTop = chatWindow.scrollHeight;
    // Clear the input field after sending the message
    input.value = "";
    // Toggle the theme for the next message
    isDark = !isDark;
}
