import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import Notification from 'components/Notification/Notification';
import { getContacts, getFilter } from 'redux/selector';

const getFilteredContacts = (contacts, filter) =>
  contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase())
  );

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = getFilteredContacts(contacts, filter)
  
  return (
  <ul>
    {
      filteredContacts.length ? (
      filteredContacts.map(contact => (
        <ContactItem
            key={contact.id}
            contact={contact}
        />
      ))) : (
          <Notification/>
      )}
  </ul> 
  )
  
  }