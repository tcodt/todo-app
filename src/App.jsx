import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, isCompleted: false }]);
      setInput("");
    }
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, isCompleted: !task.isCompleted } : task
    );

    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);

    setTasks(newTasks);
  };

  return (
    <>
      <div className="task-container">
        <h1>TODO APP ✏</h1>
        <div className="task-box">
          <div className="input-box">
            <input
              type="text"
              placeholder="Add a task..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addTask}>Add</button>
          </div>
          <ul className="task-list">
            {tasks &&
              tasks.map((task, index) => (
                <li key={index} className={task.isCompleted ? "completed" : ""}>
                  <span onClick={() => toggleTask(index)}>{task.text}</span>
                  <button onClick={() => removeTask(index)}>Delete</button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
