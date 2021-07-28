import React, { useState } from 'react'

function ProfessionalDetails({ jobTitle, jobDescription, startDate, endDate, companyName, nextStep, prevStep, handleChange }) {

    const [toggle, setToggle] = useState(false)

    const handleNext = (e) => {
        e.preventDefault();
        console.log("handleNext is executed")
        nextStep()
    }

    const handlePrev = (e) => {
        e.preventDefault();
        console.log("handlePrev is executed")
        prevStep()
    }

    const toggleHandler = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <div className="grid place-items-center content-center">
                <form className="flex p-4 shadow-md my-12 flex-col justify-center w-10/12 mx-auto md:w-2/5 w-5/6 bg-white">
                    <h2 className="mb-8">Professional Details</h2>
                    <label>Job Title</label>
                    <input onChange={(e) => { handleChange("jobTitle")(e) }} value={jobTitle} className="border border-indigo-600 bg-white px-4 py-2 mt-2.5 mb-4" type="text" placeholder="Eg: Frontend Engineer" required />
                    <label>Company Name</label>
                    <input onChange={(e) => { handleChange("companyName")(e) }} value={companyName} className="border border-indigo-600 bg-white px-4 py-2 mt-2.5 mb-4" type="email" placeholder="Eg: XYZ Company" required />
                    <div className="flex justify-between flex-col sm:flex-row">
                        <div className="flex flex-col flex-1 sm:mr-4">
                            <label>Start date</label>
                            <input className="border border-indigo-600 bg-white px-4 py-2 mt-2.5 mb-4" type="date" onChange={(e) => { handleChange("startDate")(e) }} value={startDate} />
                        </div>
                        <div className="flex-1 flex flex-col">
                            <label>End date</label>
                            {toggle ? <input type="date" className="border border-indigo-600 bg-white px-4 py-2 mt-2.5 mb-4 text-gray-500" disabled /> : <input className="border border-indigo-600 bg-white px-4 py-2 mt-2.5 mb-4" type="date" onChange={(e) => { handleChange("endDate")(e) }} value={endDate} />}
                        </div>
                    </div>
                    <div className="flex flex-row mb-4 items-center">
                        <input type="checkbox" onClick={toggleHandler} /><span className="mx-0.5">I currently work here</span>
                    </div>
                    <label>Job description</label>
                    <textarea onChange={(e) => { handleChange("jobDescription")(e) }} defaultValue={jobDescription} className="border border-indigo-600 bg-white px-4 py-2 mt-2.5 mb-4 mb-12 h-36" />
                    <div className="flex justify-between flex-col sm:flex-row">
                        <button type="submit" onClick={handlePrev} className="hover:bg-indigo-600 hover:text-white py-1 px-2.5 border-2 border-indigo-600 text-indigo-600 text-xl font-bold my-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>Previous</button>
                        <button type="submit" onClick={handleNext} className="hover:bg-indigo-600 hover:text-white py-1 px-2.5 border-2 border-indigo-600 text-indigo-600 text-xl font-bold my-2">Next <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg></button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ProfessionalDetails
