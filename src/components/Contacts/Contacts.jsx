import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';
import { ContactsList, ContactsItem, ButtonDelete } from './Contacts.styled';

export const Contacts = ({ contacts }) => {
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };


  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
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

