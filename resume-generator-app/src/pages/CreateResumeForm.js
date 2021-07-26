import { useState } from 'react'
import "./CreateResumeForm.css"
import PersonalDetails from "../components/formComponents/PersonalDetails"
import ProfessionalDetails from '../components/formComponents/ProfessionalDetails'

function CreateResumeForm() {

    const initialState = {
        step: 1,
        userName: "",
        userEmail: "",
        userPhoneNo: "",
        socialProfileName: [],
        socialProfileLink: [],
        skills: [],
        jobTitle: [],
        companyName: [],
        jobDuration: [],
        jobDescription: [],
        projectTitle: [],
        projectLink: [],
        projectDuration: [],
        projectDescription: [],
        academicMilestone: [],
        passoutYear: [],
        schoolName: [],
        summary: "",
        customTitle: [],
        customLink: [],
        customDescription: []
    }

    const [formState, setFormState] = useState(initialState)

    const nextStep = () => {
        setFormState({...formState, step: formState.step+1})
        console.log("formState >>>>",formState)
    }

    const prevStep = () => {
        setFormState({...formState, step: formState.step+1})
    }

    const handleChange = input => e => {
        console.log("e.target.value >>>>",e.target.value)
        formState[input]= e.target.value
        console.log("formState[input] >>>", formState[input])
        setFormState({...formState, [input]: formState[input]})
        // setFormState({...formState, [input]: e.target.value})
        console.log("formState >>>>",formState)
    }

    switch (formState.step) {
        case 1:
            return (<PersonalDetails userName={formState.userName} userEmail={formState.userEmail} userPhoneNo={formState.userPhoneNo} nextStep={nextStep} handleChange={handleChange} />)
        case 2:
            return (<ProfessionalDetails jobTitle={formState.jobTitle} companyName={formState.companyName} jobDuration={formState.jobDuration} jobDescription={formState.jobDescription} nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} />)
        default:
            return (<>{console.log(formState.step)}
            <h1>something</h1>
            </>)

    }
}

export default CreateResumeForm
