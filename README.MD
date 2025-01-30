# Draggable To-Do List

A simple, interactive to-do list web application with drag-and-drop functionality and local storage persistence.

## Features

- Add new tasks
- Drag and drop tasks to reorder them
- Double-click to delete tasks
- Automatic saving to localStorage
- Clean and responsive design

## Usage

### Adding Tasks
1. Type your task in the input field
2. Click the "Add" button or press Enter

### Managing Tasks
- **Reorder**: Drag and drop tasks to change their order
- **Delete**: Double-click any task to remove it
- **Persistence**: Tasks are automatically saved to your browser's localStorage

## Technical Implementation

The application consists of two main files:
- [index.html](index.html) - Contains the structure and styling
- [index.js](index.js) - Handles all functionality

### Key Functions

- [`addTask()`](index.js) - Creates new tasks from input
- [`createTaskElement()`](index.js) - Generates the HTML elements for tasks
- [`enableDragAndDrop()`](index.js) - Implements drag-and-drop functionality
- [`saveTasks()`](index.js) - Persists tasks to localStorage
- [`loadTasks()`](index.js) - Retrieves tasks from localStorage on page load

## Installation

1. Clone the repository
2. Open [index.html](index.html) in a modern web browser

## Browser Support

Works in all modern browsers that support:
- Drag and Drop API
- localStorage
- ES6 features

## CSS Styling

The application uses a clean, modern design with:
- Light blue color scheme
- Smooth transitions
- Responsive layout
- Card-based design