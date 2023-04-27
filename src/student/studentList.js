import { useEffect, useState } from "react";

function StudentList () {
    const [students, setStudents] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:8080/student")
        .then(response => {
          return response.json()
        })
        .then(data => {
            setStudents(data)
        })
    })
    
    
    return ( 
        <div>
        {students.length > 0 && (
          <table>
            <tr>
              <th>id</th>
              <th>name</th>
            </tr>
           
            {students.map(student => (
                <tr>
                  <td>  {student.id}</td>
                  <td>  {student.name}</td>
              </tr>
            ))}
          </table>
        )}
      </div>
    );

}

export default StudentList;