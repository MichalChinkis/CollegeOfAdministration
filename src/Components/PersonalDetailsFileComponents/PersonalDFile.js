import './PersonalDFile.css';
import { useState } from 'react';
import Swal from 'sweetalert2'; // ייבוא הספרייה


const PersonalDFile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleChange=(event, setValue)=>{
        setValue(event.target.value)
        console.log("typing", event.target.value)
    }

    const handleSubmit = () => {
        Swal.fire({
            title: 'הטופס נשלח בהצלחה!',
            text: `שם פרטי: ${firstName}\nשם משפחה: ${lastName}`,
            icon: 'success',
            confirmButtonText: 'אישור',
            confirmButtonColor: '#e91e63',
          });
      };

  return (
    <div className="container">
      <h2>First Name</h2>
      <input onChange={(e)=>{handleChange(e,setFirstName)}} type="text" />
      <h2>Last Name</h2>
      <input onChange={(e)=>{handleChange(e,setLastName)}} type="text" />
      <br />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
};

export default PersonalDFile;
