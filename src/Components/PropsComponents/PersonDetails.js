import CourseDetails from './CourseDetails.js'
const PersonDetails =(props)=>{
return(
    <>
    <h1>my name is: {props.name}</h1>
    <h2>my age is: {props.age}</h2>
    <CourseDetails courseName={"English"} courseMark={90}/>
    <CourseDetails courseName={"Math"} courseMark={100}/>
    </>
)
}
export default PersonDetails;