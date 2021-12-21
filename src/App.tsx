import React, { useState } from 'react';
import './App.css';
import { Button } from './Components/Button/Button';
import { Display } from './Components/Display/Display';

export function App() {
  const titleBtn_1: string = "inc"
  const titleBtn_2: string = "reset"

  const minCount: number = 0
  const maxCount: number = 5
  const [count, setCount] = useState<number>(0)

  const addCount = () => {
    if (count < maxCount) {
      setCount(count + 1)
    }
  }

  const resetCount = () => {
    if (count === maxCount || count > minCount) {
      setCount(0)
    }
  }

  return (
    <div className="App">
      <Display countD={count} />
      <div className="buttonBlock">
        <Button title={titleBtn_1} callBack={addCount} count={count}/>
        <Button title={titleBtn_2} callBack={resetCount} count={count}/>
      </div>
    </div>
  )
}
