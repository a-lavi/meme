import {useState} from "react"
import "./Meme.css" 
function Meme({meme}) {
    
    const add = "600px"

    const [inputText, setInputText] = useState("")
    const [confTextUp, setConfTextUp] = useState("")
    const [confTextDown, setConfTextDown] = useState("")
    const changeHandler = (event) => {
            setInputText(event.target.value)
        }
        
        const subUp = (event)=>{
            event.preventDefault()
    setConfTextUp(inputText)  
    event.target[0].value = "" 
          } 
    const subDown = (event)=>{
        event.preventDefault()
        
setConfTextDown(inputText) 
event.target[0].value = "" 
console.log(event)
      } 

       if (!meme) {
        return <div>Loading ...</div>
    }

    console.log(confTextDown)
    return (
        <>
        <div className="form-box">
            <form onSubmit={subUp}>
            <input type="text" placeholder="" onChange={changeHandler} />
            <button>Text1</button>
            </form>
            <form onSubmit={subDown}>
            <input type="text" placeholder="" onChange={changeHandler} />
            <button>Text2</button>
            </form>
        </div>
        <div className="pos">
        <h2 className="upper-text">{confTextUp}</h2>
        <img className="image" style={{width:`${meme.width + 'px'} `, height:`${meme.height + 'px'}`} } src={meme.url} />
        
        <h2 className="down-text">{confTextDown}</h2>
        <p> {meme.name}</p>
        </div>
        </>
    )

}

export default Meme