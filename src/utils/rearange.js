  // Fisher Yates Shuffle
  export function rearangePictures(pictureData) {
      
      let currentIndex = pictureData.length;
      let savePictureData = pictureData;

      while(currentIndex != 0) {

        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex --;

        [savePictureData[currentIndex],savePictureData[randomIndex]] = [savePictureData[randomIndex], savePictureData[currentIndex]]
      } 
      return savePictureData
  }