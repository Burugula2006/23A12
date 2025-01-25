const stack = [];
const stackDiv = document.getElementById("stack");
const inputValue = document.getElementById("inputValue");
const messageDiv = document.getElementById("message");

function push() {
  const value = inputValue.value.trim();
  if (value === "" || stack.length >= 1000) {
    messageDiv.textContent = "Stack is full or invalid input!";
    return;
  }

  stack.push(value);
  displayStack();
  messageDiv.textContent = `${value} pushed to stack.`;
  inputValue.value = "";
  updateStackDisplay();
}

function pop() {
  if (stack.length === 0) {
    messageDiv.textContent = "Stack is empty!";
    return;
  }

  const value = stack.pop();
  displayStack();
  messageDiv.textContent = `${value} popped from stack.`;
  updateStackDisplay();
}

function displayStack() {
  stackDiv.innerHTML = "";
  for (let i = 0; i < stack.length; i++) {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";
    itemDiv.style.bottom = `${i * 30}px`;
    itemDiv.textContent = stack[i];
    stackDiv.appendChild(itemDiv);
  }
}
document.getElementById("sizeBtn").addEventListener("click", () => {
  document.getElementById("sizeOutput").textContent = `Size: ${stack.length}`;
});

function updateStackDisplay() {
  document.getElementById("stackOutput").textContent = `Stack: [${stack.join(
    ", "
  )}]`;
  document.getElementById("sizeOutput").textContent = `Size: ${stack.length}`;
}
