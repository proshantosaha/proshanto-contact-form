import React, { useState } from 'react'

const Table = ({contacts}) =>{
    const [filter,setFilter] = useState('All');

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange =(e)=>{
        setFilter(e.target.value);
    }

    const searchCB = (contact)=>
      contact.name.includes(searchTerm)|| contact.email.includes(searchTerm);
    

    let filterdContacts = [];
    if (filter === 'All'){
        filterdContacts = searchTerm ? contacts.filter(searchCB):contacts;
    }else{
        filterdContacts = contacts.filter(contact=>contact.group ===filter && searchCB(contact)) ;
    }

    // if(searchTerm){
    //     filterdContacts = contacts.filter(contact=>contact.name.includes(searchTerm)||
    //     contact.email.includes(searchTerm));
    // }



    return (
        <>
            <div>
                <br/>
                Filters:
                <select onChange={handleChange}>
                    <option value='All'>All</option>
                    <option value=''>None</option>
                    <option value='Home'>Home</option>
                    <option value='Office'>Office</option>
                </select>
                <input 
                type='search' 
                placeholder='search ' 
                value={searchTerm}
                onChange={e=>setSearchTerm(e.target.value)}
                />  
                <table>
                    <thead>
                        <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>Group</th>
                        </tr>
                    </thead>

                    <tbody>
                    {filterdContacts.map((contact,index)=>(
                        <tr key={index}>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.group}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
  
  }
export default Table