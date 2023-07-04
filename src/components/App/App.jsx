import { Container, MainTitle, Title, EmptyText } from './App.styled';

import { ContactForm } from 'components/ContactForm';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';

import { useSelector } from 'react-redux';

import { getContacts, getFilter } from '../../redux/selector';
export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const getVisibleContacts = () => {
    const normalizedFilter = filter.query.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {visibleContacts.length ? (
        <Contacts contacts={visibleContacts} />
      ) : (
        <EmptyText>Nothing found</EmptyText>
      )}
    </Container>
  );
};
