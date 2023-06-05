import React, { useState } from 'react'

const CONTACT_FORM_INIT ={
    name:"",
    email:"",
  }
  
  
  const ContactFrom = ({getContacts}) =>{
     const [values, setValues] = useState({...CONTACT_FORM_INIT})
  
     const {name,email} = values
  
  
  
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
        <br/>
        <input type="submit" value={'create new contact'}/>
      </form>
    )
  }

export default ContactFrom