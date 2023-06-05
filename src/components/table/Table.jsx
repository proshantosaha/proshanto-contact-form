import React, { useState } from 'react'

const Table = ({contacts}) =>{
    const [filter,setFilter] = useState('All')

    const handleChange =(e)=>{
        setFilter(e.target.value)
    }

    return (
        <>
            <div>
                <br/>
                Filters:
                <select onChange={handleChange}>
                    <option value='All'>All</option>
                    <option value='None'>None</option>
                    <option value='Home'>Home</option>
                    <option value='Office'>Office</option>
                </select>
            </div>

            <table>
            <thead>
                <tr>
                <th>name</th>
                <th>email</th>
                <th>Group</th>
                </tr>
            </thead>

            <tbody>
            {contacts.map((contact,index)=>(
                <tr key={index}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.group}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </>
    )
  
  }
export default Table