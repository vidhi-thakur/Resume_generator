import React from 'react'
import "./ProfessionalDetails.css"

function ProfessionalDetails({ jobTitle, jobDescription, jobDuration, companyName, nextStep, prevStep, handleChange }) {
    return (
        <>
            <h2 className="text-indigo-600 mt-12 mb-8 text-center">Personal Details</h2>
            <div className="grid place-items-center content-center">
                <form className="flex flex-col justify-center w-10/12 mx-auto md:w-2/5 w-5/6">
                    <label>Name</label>
                    <input onChange={(e) => { handleChange("userName")(e) }} value={userName} className="bg-white px-4 py-2 mt-2.5 mb-4" type="text" placeholder="Eg: Jhonny Doe" required />
                    <label>Email</label>
                    <input onChange={(e) => { handleChange("userEmail")(e) }} value={userEmail} className="bg-white px-4 py-2 mt-2.5 mb-4" type="email" placeholder="Eg: Jhonnydoe@gmail.com" required />
                    <label>Contant no.</label>
                    <input onChange={(e) => { handleChange("userPhoneNo")(e) }} defaultValue={userPhoneNo} className="bg-white px-4 py-2 mt-2.5 mb-12" placeholder="Eg: 9899545844 (optional)" />
                    <button type="submit" onClick={handleNext} className="mx-auto hover:bg-indigo-600 hover:text-white py-1 px-2.5 border-2 border-indigo-600 text-indigo-600 text-xl font-bold">Next <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg></button>
                </form>
            </div>
        </>
    )
}

export default ProfessionalDetails
