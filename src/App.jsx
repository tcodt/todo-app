import "./App.css";

function App() {
  return (
    <>
      <div className="task-container">
        <h1>TODO APP ✏</h1>
        <div className="task-box">
          <div className="input-box">
            <input type="text" />
            <button>Add</button>
          </div>
          <ul className="task-list">{/* TODOS */}</ul>
        </div>
      </div>
    </>
  );
}

export default App;
