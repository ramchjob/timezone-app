import { useEffect, useState } from "react";
import './student.css'
import AddStudent from "./addStudent";

function StudentList() {
    const [students, setStudents] = useState([]);

    const fetchUserData = () => {
    
    
        fetch("http://localhost:8080/student" )
            .then(response => {
                return response.json();

            }).then((data) => {
                setStudents(data);
              })
              .catch((error) => {
                
              })
             
    }
    useEffect(() => {
        fetchUserData()
    }, [])
    function deleteStudent(student) {
        fetch("http://localhost:8080/student/" + student.id, {method: "DELETE"})
        .then(response => {
            fetchUserData();
            return;
        })
        .catch(error => {console.log(error)})
    };

    function editStudent(student) {
        
    };

    return (
        <div>
            {students.length > 0 && (
                <table class="center">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr>
                                <td>  {student.id} </td>
                                <td>  {student.name} </td>
                                <td>  {student.email} </td>
                                <td>  <button onClick={() => editStudent(student)}>Edit</button> </td>
                                <td>  <button onClick={() => deleteStudent(student)}>Delete</button> </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <br/>
            <AddStudent />
        </div>
    );

}

export default StudentList;