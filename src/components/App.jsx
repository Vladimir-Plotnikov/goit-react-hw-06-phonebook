import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Sorting } from './Sorting/Sorting';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';

import './ContactForm/ContactForm.css';
import './Sorting/Sorting.css'
import './ContactItem/ContactItem.css'

export function App(){

  const contacts = useSelector(getContacts)
  
return (
    <div className='GlobalClass'>
      <div>
        <h1 className='PhoneBook'>Phonebook</h1>
        <ContactForm />
        <Sorting/>
        
        {contacts.length !==0&&<ContactList/>}
      </div>
    </div>
  )

};


