import { useState } from 'react';
import './student.css'

function AddStudent()  {
    const [showForm, setShowForm] = useState(false);
    const showORHideStudenForm = () => setShowForm(!showForm);
    const [studentFormData, setStudentFormData] = useState({name: "",email: ""});


 const StudentForm =  () =>  {
     
    const handleCancel = e => {
          e.preventDefault();
        console.log('cancel');
    };

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setStudentFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        const body = {"name": studentFormData.name, "email": studentFormData.email };
        fetch("http://localhost:8080/student/", {method: "POST",  body: JSON.stringify(body), 
        headers: {
            "Content-Type": "application/json",
          }})
        .then(response => {
            console.log(response);
        })
        .catch(error => {console.log(error)});
      };

       return (
        
     <div> 
    <form id= "add-student" onSubmit={handleSubmit}>

         <label>Name : </label>
         <input type="text" id="name" name="name" value={studentFormData.name} onChange={handleChange}/>

         <label> Email : </label>
         <input type="email" id="email" name="email" value={studentFormData.email} onChange={handleChange}/>
         
         <button type="submit" class="primary-button" >Add</button>
         <button className="primary-button" onClick={handleCancel} >Cancel</button>

      </form>
      </div>
     );
 };


    return (
    <>
    <button className="primary-button" onClick={showORHideStudenForm}> Add Student</button>
    {showForm && <StudentForm/> }
    </>
    )
}

export default AddStudent;