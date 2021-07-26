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
        console.log("step before >>>>",formState.step)
        setFormState({step: formState.step + 1})
        console.log("step after >>>>",formState.step)
    }

    const prevStep = () => {
        setFormState(formState.step - 1)
    }

    const handleChange = input => e => {
        setFormState({[input]: e.target.value})
    }

    switch (formState.step) {
        case 1:
            return (<PersonalDetails name={formState.userName} email={formState.userEmail} phoneNo={formState.userPhoneNo} nextStep={nextStep} handleChange={handleChange} />)
        case 2:
            return (<ProfessionalDetails jobTitle={formState.jobTitle} companyName={formState.companyName} jobDuration={formState.jobDuration} jobDescription={formState.jobDescription} nextStep={nextStep} prevStep={prevStep} />)
        default:
            return <h1>Default page</h1>

    }
}

export default CreateResumeForm
