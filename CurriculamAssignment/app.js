// Import utility functions
import { debounce, throttle } from './utils.js';

// DOM Elements
const addTaskForm = document.getElementById('addTaskForm');
const taskInput = document.getElementById('taskInput');
const taskCategory = document.getElementById('taskCategory');
const tasksList = document.getElementById('tasksList');
const searchInput = document.getElementById('searchInput');
const clearAllBtn = document.getElementById('clearAllBtn');
const backToTopBtn = document.getElementById('backToTop');

// Initialize tasks array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Render tasks
function renderTasks(filteredTasks = null) {
    const tasksToRender = filteredTasks || tasks;
    tasksList.innerHTML = '';
    
    if (tasksToRender.length === 0) {
        tasksList.innerHTML = '<p class="no-tasks">No tasks found. Add a task to get started!</p>';
        return;
    }
    
    tasksToRender.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        
        taskItem.innerHTML = `
            <input 
                type="checkbox" 
                class="task-checkbox" 
                ${task.completed ? 'checked' : ''}
                data-id="${task.id}"
            >
            <span class="task-text ${task.completed ? 'completed' : ''}">
                ${task.text}
            </span>
            <span class="task-category category-${task.category}">
                ${task.category}
            </span>
            <button class="delete-btn" data-id="${task.id}">Delete</button>
        `;
        
        tasksList.appendChild(taskItem);
    });
}

// Add new task
function addTask(e) {
    e.preventDefault();
    
    const text = taskInput.value.trim();
    const category = taskCategory.value;
    
    if (text) {
        const newTask = {
            id: Date.now(),
            text,
            category,
            completed: false
        };
        
        tasks.push(newTask);
        saveTasks();
        renderTasks();
        taskInput.value = '';
        taskInput.focus();
    }
}

// Toggle task completion
function toggleTask(e) {
    if (e.target.classList.contains('task-checkbox')) {
        const taskId = parseInt(e.target.dataset.id);
        const task = tasks.find(task => task.id === taskId);
        
        if (task) {
            task.completed = e.target.checked;
            saveTasks();
            renderTasks();
        }
    }
}

// Delete task
function deleteTask(e) {
    if (e.target.classList.contains('delete-btn')) {
        const taskId = parseInt(e.target.dataset.id);
        tasks = tasks.filter(task => task.id !== taskId);
        saveTasks();
        renderTasks();
    }
}

// Clear all tasks
function clearAllTasks() {
    if (tasks.length > 0 && confirm('Are you sure you want to delete all tasks?')) {
        tasks = [];
        saveTasks();
        renderTasks();
    }
}

// Search tasks
function searchTasks() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredTasks = tasks.filter(task => 
        task.text.toLowerCase().includes(searchTerm)
    );
    renderTasks(filteredTasks);
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Show/hide back to top button
function handleScroll() {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Event listeners
addTaskForm.addEventListener('submit', addTask);
tasksList.addEventListener('click', toggleTask);
tasksList.addEventListener('click', deleteTask);
clearAllBtn.addEventListener('click', clearAllTasks);
searchInput.addEventListener('input', debounce(searchTasks, 300));
window.addEventListener('scroll', throttle(handleScroll, 200));
backToTopBtn.addEventListener('click', scrollToTop);

// Initial render
renderTasks();