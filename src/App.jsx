import { useState } from 'react'
 
import './App.css'

import { MainArea } from './components/mainArea.jsx';
import { Result } from './components/result.jsx';
import { Card } from './components/card.jsx';

import { originalPictures } from "./assets/dataAssembled.js"
// import { rearangePictures } from "./utils/rearange.js"

function App() {
  const [bestResult, setBestResult] = useState(0)
  const [countAttempts, setCountAttempts] = useState(0)
  const [correctPicks, setCorrectPicks] = useState(0)
  const [pictureData, setPictureData] = useState(originalPictures)

  function rearangePictures(pictureData) {
      
      let currentIndex = pictureData.length;
 
      while(currentIndex != 0) {

        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex --;

        [pictureData[currentIndex], pictureData[randomIndex]] = [pictureData[randomIndex], pictureData[currentIndex]]
      } 
      
      console.log("in reaarange : ", pictureData)
      
      return pictureData
  }

  function handleGuess() {
    setPictureData(pictures => [...rearangePictures(pictures)])
    console.log(pictureData, "\n IN HANDLEGUESS");
  }

  console.log(pictureData, "\n UNTEN")

  return (
    <>
      <div className='cards-space'>
        {pictureData.map(
          picture => 
        {
          console.log("IN MAP ", picture); 
          return < Card key={picture.index} imgSrc={picture.origin} imgName={picture.title} handleGuess={handleGuess} /> }
        )}
      </div>         
    </>
  )
}

export default App
