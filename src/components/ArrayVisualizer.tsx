import { forEach, map } from 'ramda';
import React from 'react';

function normalizeArray(array: Array<number>, max = 1) {
  const ratio = Math.max.apply(Math, array) / max;
  const length = array.length;

  for (let i = 0; i < length; i++) {
    array[i] /= ratio;
  }
  return array;
}

function generateRandomArray(length = 1) {
  return Array(length)
    .fill(0)
    .map(() => Math.floor(Math.random() * 1000));
}

function ArrayVisualizer({ array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }) {
  array = generateRandomArray(200);
  console.log(array);
  return (
    <div className="flex flex-row items-end justify-between bg-zinc-900 px-4 py-2">
      {map(
        x => (
          <div className={`bg-slate-600 w-1`} style={{ height: `${x * 200}px` }}></div>
        ),
        normalizeArray(array)
      )}
    </div>
  );
}

export default ArrayVisualizer;
