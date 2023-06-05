import React, { useState } from 'react'

const CONTACT_FORM_INIT ={
    name:"",
    email:"",
    group:'',
  }
  
  
  const ContactFrom = ({getContacts}) =>{
     const [values, setValues] = useState({...CONTACT_FORM_INIT})
  
     const {name,email,group} = values
  
  
  
     const handleChange = (e) =>{
          setValues({
            ...values,
            [e.target.name]:e.target.value,
          })
  
        
  
     }
  
  
     const handleSubmit = (e) =>{
        e.preventDefault()
  
        getContacts(values)
        setValues({...CONTACT_FORM_INIT})
  
     }
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input 
            type="text"  
            id='name' 
            name='name' 
            value={name}
            onChange={handleChange}
          
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input 
            type="email" 
            id='email' 
            name='email' 
            value={email}
            onChange={handleChange}
            />
           
        </div>
            <div>
                <label htmlFor='group'>Group</label>
                <select name="group" id="group" value={group}  onChange={handleChange}>
                    <option value=''>Select group</option>
                    <option value='Home'>Home</option>
                    <option value='Office'>Office</option>
                </select>
            </div>


        <br/>
        <input type="submit" value={'create new contact'}/>
      </form>
    )
  }

export default ContactFrom