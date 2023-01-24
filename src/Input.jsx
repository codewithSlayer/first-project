import React, { useState } from 'react'
import Show from './Show';
const Input = () => {

    const [one, setOne] = useState("");
    const [two, setTwo] = useState([]);
    const showing = (event) => {
        setOne(event.target.value);
    }

    const generate = () => {

        setTwo((preVal) => {
            return [...preVal, one]
        })
        setOne(" ");

    }

    const deleteItems = (id) =>{
        setTwo((preVal)=>{
            return(
                preVal.filter((val,index)=>{
                    return index !== id
                })
            )
        })
    }

    return (
        <>
            <div className="container">
                <div className="mb-3 my-5">
                    <input type="email" className="form-control" onChange={showing} id="exampleFormControlInput1" placeholder="add items" value={one} />
                </div>
                <button className="btn btn-primary" onClick={generate}>Add</button>

                    <ol>
                        {two.map((val,index) => {
                            return <Show key = {index}
                                id = {index}
                                matter = {val}
                                remove = {deleteItems}
                            />
                        })}
                    </ol>
                
            </div>
        </>
    )
}

export default Input
