import { useState, useRef } from 'react'
 
import './App.css'

import { MainArea } from './components/mainArea.jsx';
import { Result } from './components/result.jsx';
import { Card } from './components/card.jsx';
import { Defeat } from './components/defeatDialog.jsx';
import { Victory } from './components/victoryDialog.jsx';
import { CounterPanel } from './components/counterPanel.jsx';

import { originalPictures } from "./assets/dataAssembled.js"
import { rearangePictures } from "./utils/utilFcts.js"

function App() {
  const [bestResult, setBestResult] = useState(0)
  const [countAttempts, setCountAttempts] = useState(0)
  const [correctPicks, setCorrectPicks] = useState([])
  const [pictureData, setPictureData] = useState([...originalPictures])
  const [dialogActive, setDialogActive] = useState(false)  
  const dialogRef = useRef(null)

  function handleGuess(e) {
    if(correctPicks.includes(e.target.dataset.index)) {
      toggleDialog()
    }
    else {
      if(correctPicks.length === 11)
        toggleDialog()
      else
      {        
        correctPicks.push(e.target.dataset.index)
        setCountAttempts(counter => counter + 1)
        setPictureData(pictures => [...rearangePictures(pictures)])
      }
    }
  }

  function toggleDialog() {
    if(!dialogRef.current) 
      return;

    if(dialogRef.current.hasAttribute("open")) {
      dialogRef.current.close() 
      setAllToStart()
    }
    else dialogRef.current.showModal()
  }

  function setAllToStart() {
    setCorrectPicks(() => [])
    setPictureData([...originalPictures])
    if(countAttempts > bestResult)
      setBestResult(countAttempts)
    setCountAttempts(0);
  }


  return (
    <>
      <h1><span>Van Gogh and imitators play</span> MEMORY</h1>
      < CounterPanel  bestResult={bestResult} countAttempts={countAttempts} />
      <div className='cards-space'>
        {pictureData.map(picture => 
         < Card key={picture.index} index={picture.index} imgSrc={picture.origin} imgName={picture.title} handleGuess={handleGuess} /> )
        }
      </div>
      <dialog ref={dialogRef} >
        {correctPicks.length === 11 
        ? < Victory /> 
        : < Defeat bestResult={bestResult} countAttempts={countAttempts} />}
          <button onClick={toggleDialog}> Close</button>
      </dialog>        
    </>
  )
}

export default App
