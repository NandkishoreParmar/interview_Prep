#!/usr/bin/env node

const readline = require('readline');

class SimpleTaskManager {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  start() {
    console.log('\nSimple Task Manager');
    console.log('-------------------');
    this.showMenu();
  }

  showMenu() {
    console.log('\nOptions:');
    console.log('1. Add Task');
    console.log('2. List Tasks');
    console.log('3. Complete Task');
    console.log('4. Exit\n');

    this.rl.question('Choose an option (1-4): ', (answer) => {
      switch(answer.trim()) {
        case '1':
          this.addTask();
          break;
        case '2':
          this.listTasks();
          break;
        case '3':
          this.completeTask();
          break;
        case '4':
          console.log('Goodbye!');
          this.rl.close();
          return;
        default:
          console.log('Invalid option. Please try again.');
          this.showMenu();
      }
    });
  }

  addTask() {
    this.rl.question('Enter task title: ', (title) => {
      if (!title.trim()) {
        console.log('Error: Task title cannot be empty');
        return this.addTask();
      }

      this.rl.question('Enter due date (YYYY-MM-DD): ', (dueDate) => {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(dueDate)) {
          console.log('Error: Invalid date format. Use YYYY-MM-DD');
          return this.addTask();
        }

        const task = {
          id: this.nextId++,
          title: title.trim(),
          dueDate,
          completed: false
        };
        this.tasks.push(task);
        console.log(`Task added with ID ${task.id}`);
        this.showMenu();
      });
    });
  }

  listTasks() {
    if (this.tasks.length === 0) {
      console.log('No tasks found.');
    } else {
      console.log('\nTask List:');
      this.tasks.forEach(task => {
        const status = task.completed ? '[✓]' : '[ ]';
        console.log(`${status} ID: ${task.id} | ${task.title} | Due: ${task.dueDate}`);
      });
    }
    this.showMenu();
  }

  completeTask() {
    this.listTasks();
    if (this.tasks.length === 0) {
      return this.showMenu();
    }

    this.rl.question('Enter task ID to complete: ', (id) => {
      const taskId = parseInt(id);
      const task = this.tasks.find(t => t.id === taskId);

      if (!task) {
        console.log(`Error: Task with ID ${id} not found`);
        return this.completeTask();
      }

      if (task.completed) {
        console.log(`Task ${task.id} is already completed`);
      } else {
        task.completed = true;
        console.log(`Task "${task.title}" marked as completed`);
      }
      this.showMenu();
    });
  }
}

// Start the application
const app = new SimpleTaskManager();
app.start();