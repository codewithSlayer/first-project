import React from 'react'

const Show = (props) => {

  const removeItems = () =>{
    props.remove(props.id);
  }

  return (
    <>
      <li className="my-3"><i className="fa-solid fa-trash-can mx-3" onClick={removeItems} ></i> {props.matter}</li>
    </>
  )
}

export default Show
