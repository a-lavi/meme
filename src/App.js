import './App.css';
import Meme from './Meme';
import {useEffect, useState} from 'react'

function App() {
  const [memeObjs, setmemeObjs] = useState([])
  const [currentImage, setCurrentImage] = useState(1);
  const [imagePerPage, setImagePerPage] = useState(1);


  async function loadMemePicIUrls() {
    const response = await fetch( "https://api.imgflip.com/get_memes" )
    const result = await response.json()
    console.log(result.data)
    const randomIndex = Math.floor(Math.random() * result.data.memes.length)
    console.log(result.data.memes[randomIndex])
    setmemeObjs(result.data.memes[randomIndex])
  }

  useEffect(() => {
    loadMemePicIUrls()
  }, []) 
  //get meme
 /*  const lastImage = currentImage * imagePerPage
const firstImage = lastImage - imagePerPage;
const currentImages = memeObjs.slice(firstImage,lastImage)

 */




  return (
    <div className="App">
      <h1>Create a Meme</h1>
      <Meme meme={memeObjs}  />
    </div>
  );
}

export default App;