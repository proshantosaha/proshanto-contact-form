import React, { useState } from 'react'
import ContactFrom from './components/contactFrom/ContactFrom'
import Table from './components/table/Table'





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