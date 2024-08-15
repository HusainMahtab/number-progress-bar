import { useState } from 'react'

function App() {
  const [num, setNum] = useState(0);
  const [history, setHistory] = useState([0]);
  const [step, setStep] = useState(0);

  const handleAdd = () => {
    if (num < 150) {
      const newNum = num + 1;
      updateState(newNum);
    }
  };

  const handleSubtract = () => {
    if (num > 0) {
      const newNum = num - 1;
      updateState(newNum);
    }
  };

  const updateState = (newNum) => {
    const newHistory = history.slice(0, step + 1);
    setHistory([...newHistory, newNum]);
    setStep(newHistory.length);
    setNum(newNum);
  };

  const handleUndo = () => {
    if (step > 0) {
      const newStep = step - 1;
      setStep(newStep);
      setNum(history[newStep]);
    }
  };

  const handleRedo = () => {
    if (step < history.length - 1) {
      const newStep = step + 1;
      setStep(newStep);
      setNum(history[newStep]);
    }
  };

  return (
   <div className="w-full h-full flex justify-center items-center">
    <div className="flex flex-col items-center justify-center p-20 md:mt-12 mt-56 border rounded-lg shadow-lg ">
    <h1 className="text-2xl font-bold mb-6">Number Progress Bar</h1>
    <div className="flex space-x-4 mb-6">
      <button
        onClick={handleSubtract}
        className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600"
      >
        Subtract 1
      </button>
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
      >
        Add 1
      </button>
    </div>
    <div className="relative w-full max-w-md h-8 bg-gray-300 rounded mb-4 overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-300 ease-in-out"
        style={{ width: `${(num / 150) * 100}%` }}
      ></div>
    </div>
    <div className="text-lg font-semibold mb-4">Current Number: {num}</div>
    <div className="flex space-x-4">
      <button
        onClick={handleUndo}
        className="px-4 py-2 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600"
      >
        Undo
      </button>
      <button
        onClick={handleRedo}
        className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
      >
        Redo
      </button>
    </div>
   </div>
  </div>
    
  )
}

export default App
