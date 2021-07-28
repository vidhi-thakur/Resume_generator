import React from 'react'

function AcademicDetails({ academicMilestone, passoutYear, schoolName, nextStep, prevStep, handleChange }) {

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

    return (
        <>
            <div className="grid place-items-center content-center">
                <form className="flex p-4 shadow-md my-12 flex-col justify-center w-10/12 mx-auto md:w-2/5 w-5/6 bg-white">
                    <h2 className="mb-8">Academic Details</h2>
                    <label>Project Title</label>
                    <input onChange={(e) => { handleChange("academicMilestone")(e) }} value={academicMilestone} className="border border-indigo-600 bg-white px-4 py-2 mt-2.5 mb-4" type="text" placeholder="Eg: XYZ app" required />
                    <div className="flex justify-between flex-col sm:flex-row">
                        <div className="flex flex-col flex-1 sm:mr-4">
                            <label>Project link</label>
                            <input className="border border-indigo-600 bg-white px-4 py-2 mt-2.5 mb-4" type="url" onChange={(e) => { handleChange("schoolName")(e) }} value={schoolName} placeholder="Eg: https://pigeon-go.web.app/" />
                        </div>
                        <div className="flex flex-col flex-1">
                            <label>Project date</label>
                            <input className="border border-indigo-600 bg-white px-4 py-2 mt-2.5 mb-4" type="date" onChange={(e) => { handleChange("passoutYear")(e) }} value={passoutYear} />
                        </div>
                    </div>
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

export default AcademicDetails
