import React from 'react'
import "./WelcomePage.css"
import welcomeLogo from "../images/welcomeLogo.svg"

function WelcomePage() {
    return (
        <div className="welcomePage">
            <div className="welcome__innerContainer -flex-col">
                <img className="welcome__img" src={welcomeLogo} alt="Welcome-Logo" />
                <h2>Welcome to Resume Maker</h2>
                <p style={{width: "400px"}}>Generate beautiful resume and share it via shareable link or download generated resume.</p>
            </div>
        </div>
    )
}

export default WelcomePage
