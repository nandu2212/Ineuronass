import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import  Axios  from "axios";
 
function Details(){
    const [Data,SetData]=useState([]);
    const navigate=useNavigate()
    useEffect(()=>{
 Axios.get("https://blue-journalist-bbrpv.ineuron.app:4000/users").then((response)=>{
const info=response.data.data;
console.log(response,'res')
SetData(info)
    }).catch((err)=>{
console.log(err)
    })
    },[])

const DeleteUser =(id)=>{
   
    Axios.delete(`https://blue-journalist-bbrpv.ineuron.app:4000/user/${id}`).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
   }

   
    const handleCreate=()=>{
navigate('/ADD')
    }

    return (
        <>
             <table>
               <thead>
             <tr>
               <th>firstName</th>
               <th>lastName</th>
               <th>age</th>
               <th>phoneNumber</th>
               <th>action</th>
             </tr>
             </thead>
             <tbody>
            { Data.map((users)=>{
       return(
               <tr>
             <td>
     {users.firstName}
          </td>  <td>
     {users.lastName}
          </td>
          <td>
           {users.age}
          </td>
          <td>
           {users.phoneNumber}
          </td>
          <td>
<button onClick={DeleteUser(users._id)} >DELETE</button>
   
     </td>
          </tr>
           )
           })
         }
            </tbody>
          </table>
          <button onClick={handleCreate}>create</button>
          </>
          )
}

export default Details;