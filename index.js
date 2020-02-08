// 여기에서 자바스크립트 로직으로 개발하시면 됩니다.
// class를 사용하면 더욱 좋을 것 같습니다.
// es6이상의 문법을 사용해주세요.
// value="테스트입니다."

/*
   2020.02.08
   class 구조로 변경
   추가할 기능 : transition(추가,삭제시에) ,item 전체삭제기능(button)
*/

const addBtn = document.querySelector(".addBtn");
let inputValue = document.querySelector(".input");
const container = document.querySelector(".todoList");

class todoListItems {
  constructor(todoItemValue) {
    // create the item div
    this.createContainer(todoItemValue);
  }

  createContainer(todoItemValue) {
    // todoInput addBtn Click -> 출력되는 list (type input), button
    // input(수정시에도 사용)
    let input = document.createElement("input");
    input.value = todoItemValue;
    input.disabled = true;
    input.classList.add("itemInput");
    input.classList.add("non-checked");
    input.type = "text";

    let todoCheck = document.createElement("span");
    todoCheck.innerHTML = "V";
    todoCheck.classList.add("itemCheck");

    let itemBox = document.createElement("div");
    itemBox.classList.add("item");

    // 출력되는 list 안에 completeBtn
    let completeBtn = document.createElement("button");
    completeBtn.innerHTML = "완료";
    completeBtn.classList.add("completeBtn");

    // 출력되는 list 안에 editBtn
    let editBtn = document.createElement("button");
    editBtn.innerHTML = "수정";
    editBtn.classList.add("editBtn");

    // 출력되는 list 안에 removeBtn
    let removeBtn = document.createElement("button");
    removeBtn.innerHTML = "삭제";
    removeBtn.classList.add("removeBtn");

    // todoList class에 div item class 추가
    container.appendChild(itemBox);

    // div item class에 input, button 추가
    itemBox.appendChild(todoCheck);
    itemBox.appendChild(input);
    itemBox.appendChild(completeBtn);
    itemBox.appendChild(editBtn);
    itemBox.appendChild(removeBtn);

    // 일정 체크완료, 체크해제, 수정, 제거 이벤트연결.
    completeBtn.addEventListener("click", () => this.complete(input));
    todoCheck.addEventListener("click", () => this.completeRemove(input));
    editBtn.addEventListener("click", () => this.edit(input));
    removeBtn.addEventListener("click", () => this.remove(itemBox));
  }

  // 완료 버튼 클릭시 행해지는 이벤트 함수
  complete(input) {
    input.classList = "itemInput checked";
  }

  completeRemove(input) {
    input.classList = "itemInput non-checked";
  }

  // 수정 버튼 클릭시 행해지는 이벤트 함수
  edit(input) {
    input.disabled = !input.disabled;
  }

  // 삭제 버튼 클릭시 행해지는 이벤트 함수
  remove(todo) {
    let removeItem = document.querySelector(".item");
    removeItem.remove(todo);
  }
}

let addItem = () => {
  if (inputValue.value !== "") {
    new todoListItems(inputValue.value);
    inputValue.value = "";
  } else {
    alert("텍스트를 입력하고 일정을 추가해주세요.");
  }
};

// todoInput Button Click -> 일정추가를 위한 코드
addBtn.addEventListener("click", addItem);
// enter키 입력시에도 list에 추가되도록 설정
window.addEventListener("keypress", event => {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector(".addBtn").click();
  }
});
