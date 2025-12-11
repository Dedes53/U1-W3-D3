const listContainer = document.getElementById("listContainer"); //section contenente la lista
const newElementInput = document.getElementById("newElement"); //input per nuovo elemento
const addElementButton = document.getElementById("addElement"); //bottone per aggiungere elemento
const todoList = document.getElementById("todoList"); //lista

// addElementButton.addEventListener("click", () => {
//   const newElementText = newElementInput.value.trim();
//   const li = document.createElement("li");

//   if (newElementText !== "") {
//     li.textContent = newElementText;
//     todoList.appendChild(li);
//     newElementInput.value = "";
//   } else {
//     alert("Per favore, inserisci un elemento valido.");
//   }
// });

addElementButton.addEventListener("click", () => {
  const newElementText = newElementInput.value.trim();

  if (newElementText !== "") {
    const li = document.createElement("li");

    // Testo dell'elemento
    const span = document.createElement("span");
    span.textContent = newElementText;
    li.appendChild(span);

    // done button
    const doneButton = document.createElement("button");
    doneButton.textContent = "✅";
    // done function
    doneButton.addEventListener("click", () => {
      li.style.textDecoration = "line-through";
    });
    li.appendChild(doneButton);

    // delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    // delete function
    deleteButton.addEventListener("click", () => {
      li.remove();
    });
    li.appendChild(deleteButton);

    todoList.appendChild(li);

    newElementInput.value = "";
  } else {
    alert("Per favore, inserisci un elemento valido.");
  }
});
