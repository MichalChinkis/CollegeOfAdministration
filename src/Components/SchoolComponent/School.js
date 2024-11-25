import StudentDetails from './StudentDetails.js'
import Swal from 'sweetalert2'; // ייבוא הספרייה

const School = (props)=>{

    const exit=()=>{
        Swal.fire({
            text: `השער נפתח`,
            icon: 'success',
            confirmButtonText: '👍',
            confirmButtonColor: '#e91e63',
          });
    }

    const studentList=[
        {firstName:"shira", lastName:"Cohen", mark:100, phoneNum:"0527654584"},
        {firstName:"Talya", lastName:"Levi", mark:55, phoneNum:"0586955598"},
        {firstName:"Shani", lastName:"Yudelevich", mark:87, phoneNum:"0533126945"}
    ]
return(
    <>
   {studentList.map((student)=>(
    <StudentDetails firstName={student.firstName} lastName={student.lastName} mark={student.mark} phoneNum={student.phoneNum} studentExit={exit}/>
   ))}
    </>
)
}
export default School