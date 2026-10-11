import React, { useState } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Set up Vite React project environment', completed: true },
    { id: 2, title: 'Implement react-router-dom multi-page navigation', completed: true },
    { id: 3, title: 'Build reactive state management with useState', completed: false },
    { id: 4, title: 'Configure custom 404 fallback routing handler', completed: false }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [filter, setFilter] = useState('all');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const newTask = {
      id: Date.now(),
      title: inputVal.trim(),
      completed: false
    };
    setTasks([...tasks, newTask]);
    setInputVal('');
  };

  const handleToggle = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  const activeCount = tasks.filter(t => !t.completed).length;

  return (
    <div className="page-card">
      <div className="page-header">
        <span className="page-badge">useState Hook Implementation</span>
        <h1 className="page-title">Interactive Task Manager</h1>
        <p className="page-subtitle">Demonstrating reactive list updates, task filtering, and state modifications.</p>
      </div>

      <form onSubmit={handleAddTask} className="task-controls">
        <input
          type="text"
          className="task-input"
          placeholder="Add a new task..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type="submit" className="btn-primary">Add Task</button>
      </form>

      <div className="filter-bar">
        <div className="filter-tabs">
          <button
            type="button"
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All ({tasks.length})
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            Active ({activeCount})
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed ({tasks.length - activeCount})
          </button>
        </div>
        <span className="task-stats">{activeCount} pending tasks remaining</span>
      </div>

      <div className="task-list">
        {filteredTasks.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#64748b', padding: '2rem 0' }}>No tasks found in this view.</p>
        ) : (
          filteredTasks.map(task => (
            <div key={task.id} className="task-item">
              <div className="task-content">
                <input
                  type="checkbox"
                  className="task-checkbox"
                  checked={task.completed}
                  onChange={() => handleToggle(task.id)}
                />
                <span className={`task-text ${task.completed ? 'completed' : ''}`}>
                  {task.title}
                </span>
              </div>
              <button
                type="button"
                className="btn-delete"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskManager;