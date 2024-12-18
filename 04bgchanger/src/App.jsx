import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <>
    <div
      className="h-screen w-full duration-200 flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div
        className="flex gap-3 shadow-lg bg-white rounded-2xl"
        style={{
          width: "vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        <button
          onClick={() => setcolor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>

        <button
          onClick={() => setcolor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>

        <button
          onClick={() => setcolor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
      </div>
    </div>
    </>
  );
}

export default App;
