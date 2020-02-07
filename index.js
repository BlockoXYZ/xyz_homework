// 여기에서 자바스크립트 로직으로 개발하시면 됩니다.
// class를 사용하면 더욱 좋을 것 같습니다.
// es6이상의 문법을 사용해주세요.

// enter key로 todo 추가
let inputBox = document.querySelector("input");
inputBox.addEventListener("keypress", event => {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector("#addTodoBtn").click();
  }
});

// Write text to the inputbox and press the button to add todo -> 2020.02.07
function addItem() {
  // input, 새롭게 추가될 'li', inputbox에서 입력한 text
  let todoInputValue = document.querySelector("input").value;
  let li = document.createElement("li");
  let div = document.createElement("div");
  let inputText = document.createTextNode(todoInputValue);

  //   li.appendChild(inputText);
  // add todoItem
  if (todoInputValue === "") {
    alert("일정추가를 위해 텍스트를 입력해주세요.");
  } else {
    document.querySelector("#todoItems").appendChild(li);
  }
  document.querySelector("input").value = "";

  // todoItem('li'tag)에 체크박스, 완료, 수정, 삭제 추가하기
  // 추가 완료 -> 2020.02.07
  let inputTextBox = document.createElement("span");
  let complete = document.createElement("span");
  let edit = document.createElement("span");
  let remove = document.createElement("span");

  let completeBtnName = document.createTextNode("완료");
  let editBtnName = document.createTextNode("수정");
  let removeBtnName = document.createTextNode("삭제");
  div.className = "todoBtnBox";
  complete.className = "todoItemComplete";
  edit.className = "todoItemEdit";
  remove.className = "todoItemRemove";
  inputTextBox.className = "todoItemText";
  complete.appendChild(completeBtnName);
  edit.appendChild(editBtnName);
  remove.appendChild(removeBtnName);
  li.appendChild(div);
  div.appendChild(inputTextBox);
  div.appendChild(complete);
  div.appendChild(edit);
  div.appendChild(remove);
  inputTextBox.appendChild(inputText);

  /*
    완료,수정,삭제 onclick test! -> 2020.02.07
    이후에 수정기능 추가 할 예정. 
  */
  complete.setAttribute("onclick", "alert('완료체크')");
  edit.setAttribute("onclick", "alert('수정')");
  remove.setAttribute("onclick", "alert('일정삭제')");
}
