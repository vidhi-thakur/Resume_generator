import React from 'react'
import "./HomePage.css"
import emptyHomePage from "../images/emptyHomePage.svg"

function HomePage() {
    return (
        <div className="homePage flex flex-col justify-center items-center w-10/12 mx-auto">
            <div className="pt-6 text-right w-full">
                <button className="mx-auto hover:bg-indigo-600 hover:text-white p-2.5 border-2 border-indigo-600 rounded-full text-indigo-600 font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </button>
            </div>
            <img className="h-60 mb-8 mt-12" src={emptyHomePage} alt="HomePage-Logo" />
            <h3>Nothing here...</h3>
        </div>
    )
}

export default HomePage
