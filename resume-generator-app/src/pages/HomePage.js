import React from 'react'
import "./HomePage.css"
import emptyHomePage from "../images/emptyHomePage.svg"

function HomePage() {
    return (
        <div className="homePage">
            <div className="">
                <button>Create resume</button>
            </div>
            <img src={emptyHomePage} alt="HomePage-Logo" />
            <h2>Nothing here</h2>
        </div>
    )
}

export default HomePage
