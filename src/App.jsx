import { useState } from "react"

function App() {
  const [color, setColor] = useState("Olive")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <h1 className=" justify-center text-center text-2xl bg-orange-500 rounded p-2 border-slate-950">Amazing Colors</h1>
      <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-2 rounded-full">
          <button
            onClick={() => { setColor("red") }}
            className="outline-none px-4 rounded-full text-white shadow-lg" style={{ backgroundColor: "red" }}
          >Red</button>
          <button
            onClick={() => { setColor("green") }}
            className="outline-none px-4 rounded-full text-white shadow-lg" style={{ backgroundColor: "green" }}
          >green</button>
          <button
            onClick={() => { setColor("orange") }}
            className="outline-none px-4 rounded-full text-white shadow-lg" style={{ backgroundColor: "orange" }}
          >orange</button>
          <button
            onClick={() => { setColor("pink") }}
            className="outline-none px-4 rounded-full text-white shadow-lg" style={{ backgroundColor: "pink" }}
          >pink</button>
          <button
            onClick={() => { setColor("black") }}
            className="outline-none px-4 rounded-full text-white shadow-lg" style={{ backgroundColor: "black" }}
          >black</button>
          <button
            onClick={() => { setColor("blue") }}
            className="outline-none px-4 rounded-full text-white shadow-lg" style={{ backgroundColor: "blue" }}
          >blue</button>
          <button
            onClick={() => { setColor("gray") }}
            className="outline-none px-4 rounded-full text-white shadow-lg" style={{ backgroundColor: "gray" }}
          >gray</button>
          <button
            onClick={() => { setColor("skyblue") }}
            className="outline-none px-4 rounded-full text-white shadow-lg" style={{ backgroundColor: "skyblue" }}
          >skyblue</button>

        </div>
      </div>
    </div>
  )
}

export default App
