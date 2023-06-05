import React from 'react'

const Table = ({contacts}) =>{

    return (
  
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
  
        <tbody>
        {contacts.map((contact,index)=>(
          <tr key={index}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
          </tr>
          ))}
        </tbody>
      </table>
    )
  
  }
export default Table