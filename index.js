// 여기에서 자바스크립트 로직으로 개발하시면 됩니다.
// class를 사용하면 더욱 좋을 것 같습니다.
// es6이상의 문법을 사용해주세요.

// Write text to the inputbox and press the button to add todo.
function addItem() {
  // input, 새롭게 추가될 'li', inputbox에서 입력한 text
  let todoInputValue = document.querySelector("input").value;
  let li = document.createElement("li");
  let inputText = document.createTextNode(todoInputValue);

  li.appendChild(inputText);
  // add todoItem
  if (todoInputValue === "" || todoInputValue === null) {
    alert("일정추가를 위해 텍스트를 입력해주세요.");
  } else {
    document.querySelector("#todoItems").appendChild(li);
  }
  document.querySelector("input").value = "";
}
// enter key로 todo 추가
let inputBox = document.querySelector("input");
inputBox.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector("#addTodoBtn").click();
  }
});
