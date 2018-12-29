export const emptyEducation = {
    degree: '',
    gradYear: '',
    university: '',
    cityState: ''
};
export const emptyWorkExperience = {
    title:'',
    corporation:'',
    cityState:'',
    startDate: '',
    endDate:'',
    responsibilities:'',
    renderAsBullets: true
}
const initialState = {
    candidateName: '',
    professionalSummary: '',
    technicalSkills:'',
    education: [],
    workExperience:[]
}
export default {
    content: initialState
};