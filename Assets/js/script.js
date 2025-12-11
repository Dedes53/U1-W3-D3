const listContainer = document.getElementById("listContainer"); //section contenente la lista
const newElementInput = document.getElementById("newElement"); //input per nuovo elemento
const addElementButton = document.getElementById("addElement"); //bottone per aggiungere elemento
const todoList = document.getElementById("todoList"); //lista

addElementButton.addEventListener("click", () => {
  const newElementText = newElementInput.value.trim();
  const li = document.createElement("li");

  if (newElementText !== "") {
    li.textContent = newElementText;
    todoList.appendChild(li);
    newElementInput.value = "";
  } else {
    alert("Per favore, inserisci un elemento valido.");
  }
});
