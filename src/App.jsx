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

const App = () =>{

  const [contacts,setContacts] = useState([])

  const getContacts = (contact)=>{
    setContacts([].concat(contacts,contact)
     
    );
  }
  return (
    <div>
      <ContactFrom getContacts={getContacts}/>

      <Table contacts={contacts}/>
    </div>
  )
}

export default App