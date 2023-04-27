import { useEffect, useState } from "react";
import './student.css'
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );

}

export default StudentList;