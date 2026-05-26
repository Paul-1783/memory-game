import { useState } from 'react'
 
import './App.css'

import { MainArea } from './components/mainArea.jsx';
import { Result } from './components/result.jsx';
import { Card } from './components/card.jsx';

import { originalPictures } from "./assets/dataAssembled.js"

function App() {
  const [bestResult, setBestResult] = useState(0)
  const [countAttempts, setCountAttempts] = useState(0)
  const [pictureData, setPictureData] = useState(originalPictures)

  function rearangePictures(){

  }

  return (
    <>
      <div className='cards-space'>
        {pictureData.map((picture, index) =>  <Card key={picture.index} imgSrc={picture.origin} imgName={picture.title}/> )}
      </div>         
    </>
  )
}

export default App
