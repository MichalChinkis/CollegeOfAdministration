import Swal from 'sweetalert2'; // ייבוא הספרייה

const StudentDetails =(props)=>{

    const OutFromSchool=(name)=>{
        const currentTime = new Date()
        const formatTime = currentTime.getHours()+" : "+currentTime.getMinutes()
        props.studentExit()
        setTimeout(() => {
            Swal.fire({
              text: `The student ${name} went out now - ${formatTime}`,
              icon: 'warning',
              confirmButtonText: 'אישור',
              confirmButtonColor: '#e91e63',
            });
          }, 2000); // 2000 מילישניות = 2 שניות
    }

    return(
        <>
        <h2>first name: {props.firstName}</h2>
        <h2>last name: {props.lastName}</h2>
        <h2>phone number: {props.phoneNum}</h2>
        <h2>mark: {props.mark}</h2>
        {props.mark > 90 && <h3>תלמיד מצטיין</h3>}
        {props.mark < 60 && <h3>טעון שיפור</h3>}
        <button onClick={()=>OutFromSchool(props.firstName)}>יציאה</button>
        </>
    )
}
export default StudentDetails