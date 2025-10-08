import "./App.css";
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  function decreaseHandler(){
    setCount(count - 1);
  }

  function increaseHandler(){
    setCount(count + 1);
  }

  function resetHandler(){
    setCount(0);
  }
  
  return (
    <div className="w-[100vw] h-[100vh] bg-slate-900 flex flex-col gap-10 justify-center items-center">
      
      <div className="text-3xl font-medium text-blue-500">Increment & Decrement</div>
      
      <div className="text-4xl font-medium bg-slate-200 flex gap-5 py-2 px-7 rounded-sm">
        <button onClick={decreaseHandler} className="border-r-2 border-gray-500 pr-7"> - </button>
        
        <div className="px-11">{count}</div>

        <button onClick={increaseHandler} className="border-l-2 border-gray-500 pl-7"> + </button>
      </div>

      <button onClick={resetHandler} className="bg-blue-500 px-4 py-2 rounded-sm text-white font-medium text-xl">Reset</button>

    </div>
  );
}

export default App;
