import { useState } from "react"

function Count(){

    const [count,setCount] = useState(1)
    const [text,setText] =useState("")
    
    function increment(){
        setCount(count+1)
    }

    function decrement(){
        if(count >1){
            setCount(count-1)
        }
    }


    function inputText(e){
        setText(e.target.value)
    }

    // e ={
    //     type: "change",
    //     target:{
    //         value: "text"
    //     }
    // }

    return(
        <>
            <h3>Count : {count}</h3>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>


            <div>
                <input value={text} onChange={inputText}/>
                <p>{text}</p>
            </div>
        </>
    )
}
export default Count