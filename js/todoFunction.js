
window.onload = function () {
  todoInput.focus();  // 처음 들어올 때 input에 focus

  function addTodo() {
    let todoText = document.getElementById("todoInput");
    let todoList = document.getElementById("todoList");

    if (todoText.value == "") {
      alert("리스트를 입력해주세요.");

    } else {
      // 리스트 요소 생성하기
      let list = document.createElement("li");
      let todoListBox = document.createElement("div");
      let check = document.createElement("i");
      let text = document.createElement("span");
      let del = document.createElement("i");

      // 요소에 class 부여하기 
      todoListBox.className = "listBox";
      check.className = "fa-regular fa-circle nonchecked";
      text.className = "text";
      del.className = "fa-solid fa-trash-can";

      // 요소를 document에 추가하기
      todoList.appendChild(list);
      list.appendChild(todoListBox);
      todoListBox.appendChild(check);
      text.innerHTML = todoText.value;    //todoInput의 value를 span에서 출력
      todoListBox.appendChild(text);
      todoListBox.appendChild(del);

      // 추가 후 input에 쓴 내용 초기화
      todoInput.value = "";

      // 버튼 이벤트 추가 
      check.addEventListener("click", checkTodo); // check 클릭하면 동작할 이벤트
      text.addEventListener("dblclick", checkTodoClick); // text 더블클릭하면 동작할 이벤트 
      del.addEventListener("click", delTodo); // del 클릭하면 동작할 이벤트
    }
  }


  // check 클릭하면 동작할 이벤트
  function checkTodo(e) {
    let check = e.target;
    let text = e.target.nextSibling;

    if (check.className.indexOf("nonchecked") > -1) { // 체크가 안 된 상태에서 클릭하면 체크 + 텍스트 스타일
      check.className = "fa-solid fa-circle-check checked";
      text.style.textDecoration = "line-through";
      text.style.color = "#bbba";
    } else {                                         //  아니면 체크 해제 + 텍스트 스타일
      check.className = "fa-regular fa-circle nonchecked";
      text.style.textDecoration = "none";
      text.style.color = "#333"
    }
  }

  // text 더블클릭하면 동작할 이벤트 
  function checkTodoClick(e) {
    let text = e.target;
    let check = e.target.previousSibling;

    if (check.className.indexOf("nonchecked") > -1) { // 체크가 안 된 상태에서 클릭하면 체크 + 텍스트 스타일
      check.className = "fa-solid fa-circle-check checked";
      text.style.textDecoration = "line-through";
      text.style.color = "#bbba";
    } else {                                         //  아니면 체크 해제 + 텍스트 스타일
      check.className = "fa-regular fa-circle nonchecked";
      text.style.textDecoration = "none";
      text.style.color = "#333"
    }
  }

  // del 클릭하면 동작할 이벤트
  function delTodo(e) {
    let list = e.target.parentElement.parentElement; //del의 부모요소(div)의 부모요소(li)
    list.remove();
  }

  // add버튼 클릭하면 동작할 이벤트
  addBtn.addEventListener("click", addTodo)

  //input 창에서 엔터 누르면 동작할 이벤트
  todoInput.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();  //form 태그에 input 태그가 하나면 자동으로 submit. 이를 방지 하기 위해 추가
      addTodo();
    }
  });
}
