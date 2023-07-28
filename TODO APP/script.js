const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

// CREATE TEMPLATE
generateTemplate = (e) => {
  const li = ` 
        <li class="list-group-item mb-3 d-flex justify-content-between align-items-center">
          ${e}
          <i class="far fa-trash-alt delete"></i>
        </li>`;

  list.insertAdjacentHTML("beforeend", li);
};
// ADD THE TASK TO THE LIST

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskValue = addForm.addTask.value.trim();
  if (taskValue.length) {
    generateTemplate(taskValue);
    addForm.reset();
    search.value = "";
    addForm.addTask.focus();
  } else {
    alert("Please enter a task");
  }
});

// ADD THE TİCK TO THE BEGGINNING OF THE TASK AND DELETİNG THE CHOSEN TASKS

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});

// FILTER THE TASK

search.addEventListener("keyup", (e) => {
  const term = search.value.trim().toLowerCase();
  filterLi(term);
});

filterLi = (i) => {
  Array.from(list.children)
    .filter((li) => !li.textContent.toLowerCase().includes(i))
    .forEach((li) => li.classList.add("filtered"));

  Array.from(list.children)
    .filter((li) => li.textContent.toLowerCase().includes(i))
    .forEach((li) => li.classList.remove("filtered"));
};
