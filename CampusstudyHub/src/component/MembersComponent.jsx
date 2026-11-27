import { useState,useEffect } from "react";

function MembersComponent() {

    const[ismember,setismember]=useState([]);

    useEffect(()=>{
        fetch("http://localhost/CSHbackend/Allmembers.php",{
            
        })
        .then(response=>response.json())
        .then(my_data=>{
            if(my_data.success){
                setismember(my_data.data);
            }
            
        })

        .catch(error => {
            console.log("total error:",error);
        });

    },[]);


    
    return (
        <div>
            <table>
                <thead>
                    <th>#</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Year</th>
                    <th>Course</th>
                    <th>ACTION</th>
                </thead>

                <tbody>
                    {ismember.map((member) => (
                        <tr>
                            <td>{member.id}</td>
                            <td>{member.username}</td>
                            <td>{member.email}</td>
                            <td>{member.year}</td>
                            <td>{member.course}</td>
                            <td id="delete-member"><a href="" id="delete" title="Delete">Delete</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MembersComponent;