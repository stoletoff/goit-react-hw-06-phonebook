import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';
import { ContactsList, ContactsItem, ButtonDelete } from './Contacts.styled';
import { getContacts, getFilter } from 'redux/selector';
export const Contacts = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  const getContact = () => {
    const normalized = filter.query.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
  };

  const filteredContacts = getContact();

  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <ButtonDelete onClick={() => onDeleteContact(id)}>
            Delete
          </ButtonDelete>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};
