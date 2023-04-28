import { useEffect, useState } from "react";
import './student.css'
import AddStudent from "./addStudent";

function StudentList() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/student")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setStudents(data)
            })
    },[])
    function deleteStudent(student) {
        fetch("http://localhost:8080/student/" + student.id, {method: "DELETE"})
        .then(response => {
            return;
        })
        .catch(error => {console.log(error)})
    };

    return (
        <div>
            {students.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr>
                                <td>  {student.id} </td>
                                <td>  {student.name} </td>
                                <td>  <button onClick={() => deleteStudent(student)}>Delete</button> </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <AddStudent />
        </div>
    );

}

export default StudentList;