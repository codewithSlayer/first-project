import React, { useState } from 'react'
import Nav from './Nav';
import Input from './Input';
const App = () => {

    const [color, setColor] = useState("primary");

    const clicking = () =>{
        if(color === "primary"){
            setColor("dark");
            document.body.style.backgroundColor = "#112336";
            document.body.style.color = "white";
        }
        else{
            setColor("primary");
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }
    }

    return (
        <>
            <Nav fEle = {color}/>
            <div className="form-check form-switch">
                <input className="form-check-input" onClick={clicking} type="checkbox" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
            <Input />
        </>
    )
}

export default App
