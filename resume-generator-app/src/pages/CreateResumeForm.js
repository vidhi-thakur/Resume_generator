import { useState } from 'react'
import "./CreateResumeForm.css"
import PersonalDetails from "../components/formComponents/PersonalDetails"
import ProfessionalDetails from '../components/formComponents/ProfessionalDetails'
import Projects from '../components/formComponents/Projects'
import AcademicDetails from '../components/formComponents/AcademicDetails'
import Skills from '../components/formComponents/Skills'
import Summary from '../components/formComponents/Summary'
import SocialProfiles from '../components/formComponents/SocialProfiles'

function CreateResumeForm() {

    const initialState = {
        step: 1,
        userName: "",
        userEmail: "",
        userPhoneNo: "",
        socialProfileName: [],
        socialProfileLink: [],
        skills: "",
        jobTitle: [],
        companyName: [],
        startDate: [],
        endDate: [],
        jobDescription: [],
        projectTitle: [],
        projectLink: [],
        projectDate: [],
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
        console.log("Inside next step method")
        // formState.step = formState.step+1
        setFormState({ ...formState, step: formState.step + 1 })
        console.log("formState >>>>", formState)
    }

    const prevStep = () => {
        console.log("Inside prev step method")
        console.log("formState.step-1 >>>>>", formState.step - 1)
        setFormState({ ...formState, step: formState.step - 1 })
        console.log("formState.step >>>>", formState.step)
        console.log("formState >>>>", formState)
    }

    const handleChange = input => e => {
        formState[input] = e.target.value
        setFormState({ ...formState, [input]: formState[input] })
    }

    switch (formState.step) {
        case 1:
            return (<PersonalDetails userName={formState.userName} userEmail={formState.userEmail} userPhoneNo={formState.userPhoneNo} nextStep={nextStep} handleChange={handleChange} />)
        case 2:
            return (<ProfessionalDetails jobTitle={formState.jobTitle} companyName={formState.companyName} jobDuration={formState.jobDuration} jobDescription={formState.jobDescription} nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} startDate={formState.startDate} endDate={formState.endDate} />)
        case 3:
            return (<Projects projectTitle={formState.projectTitle} projectLink={formState.projectLink} projectDate={formState.projectDate} projectDescription={formState.jobDescription} nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} />)
        case 4:
            return (<AcademicDetails academicMilestone={formState.academicMilestone} passoutYear={formState.passoutYear} schoolName={formState.schoolName} nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} />)
        case 5:
            return (<Skills skills={formState.skills} nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} />)
        case 6:
            return (<Summary summary={formState.summary} nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} />)
        case 7:
            return (<SocialProfiles socialProfileName={formState.socialProfileName} socialProfileLink={formState.socialProfileLink} nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} />)
        default:
            return (<>{console.log(formState.step)}
                <h1>something</h1>
            </>)

    }
}

export default CreateResumeForm
