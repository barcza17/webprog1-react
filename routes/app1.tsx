import { useState } from "react";

export default function App1() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📝 To-do lista</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Írj be egy feladatot"
      />
      <button onClick={addTask} style={{ marginLeft: "8px" }}>
        Hozzáad
      </button>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

