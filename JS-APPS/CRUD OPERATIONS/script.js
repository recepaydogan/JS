// Arrays to store tasks in different stages
let todoListArray = [];
let progressListArray = [];
let doneListArray = [];

// Array to hold all task arrays
let listArrays = [];

// Flag to check if data is loaded from localStorage
let isDataLoaded = false;

// Variable to keep track of the dragged item
let itemDragged;

// Variable to store the current column being interacted with
let currentColumn;

// DOM elements for task operations
const openTaskInput = document.querySelector(".plus");
const closeAddInput = document.querySelector(".back");
const infoModal = document.querySelector(".information-modal");
const openInfoModal = document.querySelector(".open-info-modal");
const innerInfo = document.querySelector(".informations");
const errorModal = document.querySelector(".error-modal");
const errorBtn = document.querySelector(".err-button");
const taskAdd = document.querySelector(".add-item");
const saveTask = document.querySelector(".btn-save");

// All task containers
const allContainers = document.querySelectorAll(".drag-item-list");
const todoContainer = document.getElementById("todo-items");
const progressContainer = document.getElementById("progress-items");
const doneContainer = document.getElementById("done-items");

// Variable to track dragging state
let dragging = false;

// Maximum number of items in a container
let maxContenNumber = 11;

// Event listener for opening information modal
openInfoModal.addEventListener("click", () => {
  infoModal.style.display = "flex";
});

// Event listener to close information modal when clicked outside
infoModal.addEventListener("click", (e) => {
  const isOutside = innerInfo.contains(e.target);
  if (!isOutside) {
    infoModal.style.display = "none";
  }
});

// Function to load saved data from localStorage
function getSavedDatas() {
  if (localStorage.getItem("todoItems")) {
    todoListArray = JSON.parse(localStorage.getItem("todoItems"));
    progressListArray = JSON.parse(localStorage.getItem("progressItems"));
    doneListArray = JSON.parse(localStorage.getItem("doneItems"));
  } else {
    // Default tasks if localStorage is empty
    todoListArray = ["Study English"];
    progressListArray = ["Read Book"];
    doneListArray = ["Do Homework"];
  }
}

// Function to save data to localStorage
function saveToStorage() {
  listArrays = [todoListArray, progressListArray, doneListArray];
  const arrayNames = ["todoItems", "progressItems", "doneItems"];
  arrayNames.forEach((name, index) => {
    localStorage.setItem(name, JSON.stringify(listArrays[index]));
  });
}

// Function to handle task editing or deletion
function editOrDelete(containerNumber, itemIndex) {
  const selectedArray = listArrays[containerNumber];
  const selectedColumn = allContainers[containerNumber];
  // Check if the task is empty, delete it; otherwise, update it
  if (!dragging) {
    if (selectedColumn.children[itemIndex].textContent) {
      selectedArray[itemIndex] = selectedColumn.children[itemIndex].textContent;
      updateDOM();
    } else {
      console.log(selectedArray[itemIndex]);
      selectedArray.splice(itemIndex, 1);
      console.log(selectedArray[itemIndex]);
      updateDOM();
    }
  }
}

// Function to initiate dragging
function drag(event) {
  itemDragged = event.target;
  dragging = true;
}

// Function to allow dropping
function allowToDrop(e) {
  e.preventDefault();
}

// Function to handle dropping
function drop(e) {
  e.preventDefault();

  const parent = allContainers[currentColumn];

  // Check if the container has reached its maximum item limit
  if (parent.children.length + 1 < 11) {
    parent.appendChild(itemDragged);
  } else {
    error();
  }
  updateArrays();
  dragging = false;
}

// Function to track the column being entered during dragging
function dragEnter(column) {
  currentColumn = column;
}

// Function to filter out null values from an array
function filterArray(array) {
  const newArray = array.filter((item) => item !== null);
  return newArray;
}

// Function to update task arrays from the DOM
function updateArrays() {
  todoListArray = [];
  for (i = 0; i < todoContainer.children.length; i++) {
    todoListArray.push(todoContainer.children[i].textContent);
  }
  progressListArray = [];
  for (i = 0; i < progressContainer.children.length; i++) {
    progressListArray.push(progressContainer.children[i].textContent);
  }
  doneListArray = [];
  for (i = 0; i < doneContainer.children.length; i++) {
    doneListArray.push(doneContainer.children[i].textContent);
  }
  updateDOM();
}

// Function to create task items in the DOM
function createItems(container, containerNumber, item, itemIndex) {
  const listItem = document.createElement("li");
  listItem.classList.add("drag-item");
  listItem.textContent = item;
  listItem.draggable = true;
  listItem.contentEditable = true;
  listItem.setAttribute("ondragstart", "drag(event)");
  listItem.setAttribute(
    "onfocusout",
    `editOrDelete(${containerNumber},${itemIndex})`
  );
  container.appendChild(listItem);
}

// Function to update the entire DOM with the current task arrays
function updateDOM() {
  if (!isDataLoaded) {
    getSavedDatas();
  }

  // Clear existing content
  todoContainer.textContent = "";
  progressContainer.textContent = "";
  doneContainer.textContent = "";

  // Populate todoContainer

  todoListArray.forEach((todoItem, index) => {
    createItems(todoContainer, 0, todoItem, index);
  });

  // Populate progressContainer
  progressListArray.forEach((progressItem, index) => {
    createItems(progressContainer, 1, progressItem, index);
  });

  // Populate doneContainer
  doneListArray.forEach((doneItem, index) => {
    createItems(doneContainer, 2, doneItem, index);
  });

  // Filter out null values and save to localStorage
  todoListArray = filterArray(todoListArray);
  progressListArray = filterArray(progressListArray);
  doneListArray = filterArray(doneListArray);
  saveToStorage();
  isDataLoaded = true;
}

// Event listener for opening task input
openTaskInput.addEventListener("click", () => {
  openTaskInput.style.display = "none";
  taskAdd.textContent = "";
  taskAdd.style.display = "flex";
  saveTask.classList.add("active");
  closeAddInput.classList.add("active");
  taskAdd.focus();
});

// Event listener for closing task input
closeAddInput.addEventListener("click", () => {
  closeAddInput.classList.remove("active");
  saveTask.classList.remove("active");
  openTaskInput.style.display = "inline-block";
  taskAdd.style.display = "none";
});

// Event listener for saving a new task
saveTask.addEventListener("click", () => {
  let maxLength = todoContainer.children.length + 1;
  // Check if maximum length is not reached and task input is not empty
  if (maxLength < 11 && taskAdd.textContent) {
    todoListArray.push(taskAdd.textContent);
    taskAdd.textContent = "";
  } else {
    error();
  }

  taskAdd.focus();

  updateDOM();
});

// Event listener for handling "Enter" key press in task input
taskAdd.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard, then save button will be clicked
  if (event.key === "Enter") {
    event.preventDefault();
    saveTask.click();
    updateDOM();
  }
});

function error() {
  errorModal.style.display = "flex";
  errorBtn.addEventListener("click", () => {
    errorModal.style.display = "none";
    taskAdd.textContent = "";
    saveTask.classList.remove("active");
    closeAddInput.classList.remove("active");
    taskAdd.style.display = "none";
    openTaskInput.style.display = "block";
  });
}
updateDOM();
