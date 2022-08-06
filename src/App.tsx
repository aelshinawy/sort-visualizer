import React from 'react';
import './App.css';
import ArrayVisualizer from './components/ArrayVisualizer';

function App() {
  return (
    <div className="flex flex-col bg-gray-800 text-white h-screen v-screen p-2">
      <h1>Sort Visualizer</h1>
      <ArrayVisualizer />
    </div>
  );
}

export default App;
