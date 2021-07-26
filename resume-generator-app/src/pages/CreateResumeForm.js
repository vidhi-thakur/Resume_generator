import { useState } from 'react'
import "./CreateResumeForm.css"
import PersonalDetails from "../components/formComponents/PersonalDetails"

function CreateResumeForm() {

    const initialState = {
        step: 1,
        userName: "",
        userEmail: "",
        userPhoneNo: "",
        socialProfileName: "",
        socialProfileLink: "",
        skills: [],
        jobTitle: "",
        companyName: "",
        jobDuration: "",
        jobDescription: "",
        projectTitle: "",
        projectLink: "",
        projectDuration: "",
        projectDescription: "",
        academicMilestone: "",
        passoutYear: "",
        schoolName: "",
        summary: "",
        customTitle: "",
        customLink: "",
        customDescription: ""
    }

    const [formState, setFormState] = useState(initialState)

    switch (formState.step) {
        case 1:
            return <PersonalDetails />
        default:
            return;

    }
}

export default CreateResumeForm
