import React from 'react'

const Nav = (props) => {

    

    return (
        <>
            <nav className={`navbar navbar-${props.fEle} bg-${props.fEle}`}>
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="/">TodoApp</a>
                </div>
            </nav>
        </>
    )
}

export default Nav
