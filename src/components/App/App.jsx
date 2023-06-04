import React, { useState, useEffect } from 'react';
import { Container, MainTitle, Title, EmptyText } from './App.styled';
import { nanoid } from 'nanoid';
import contactsData from 'components/data/contacts.json';

import { ContactForm } from 'components/ContactForm';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contactKey')) ?? contactsData
    );
  });
  // обращение к localStorage используя ленивую инициализацию состояния (при первом рендере и больше не когда) (если там ничего не хранится то исользуется мой список контактов по умолчанию)
  // ?? (аналог || "логического или",  (если слева будет undefiend или null || с права вернется любое валидное значение) )
  useEffect(() => {
    window.localStorage.setItem('contactKey', JSON.stringify(contacts));
  }, [contacts]);

  // eslint-disable-next-line no-undef
  const [filter, setFilter] = useState('');

  const formattedNumber = number => {
    let Number = number.substring(0, 3) + '-';
    for (let i = 3; i < number.length; i += 1) {
      if ((i - 3) % 2 === 0 && i !== 3) {
        Number += '-';
      }
      Number += number[i];
    }
    return Number;
  };

  const addContact = (name, number) => {
    const formatted = formattedNumber(number);
    const repeatName = contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (repeatName) {
      return alert(`${name} is already in contacts`);
    }
    const newContact = {
      id: nanoid(),
      name,
      number: formatted,
    };
    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };
  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm addContact={addContact} />
      <Title>Contacts</Title>
      <Filter value={filter} onChange={changeFilter} />
      {visibleContacts.length ? (
        <Contacts contacts={visibleContacts} onDeleteContact={deleteContact} />
      ) : (
        <EmptyText>Nothing found</EmptyText>
      )}
    </Container>
  );
};

// export class App extends Component {
//   state = {
//     contacts: contactsData,
//     filter: '',
//   };

//  + componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contactKey', JSON.stringify(this.state.contacts));
//     }
//   }
//  + componentDidMount() {
//     const contactList = localStorage.getItem('contactKey');
//     const parsedContactList = JSON.parse(contactList);
//     // Проверка localStorage на наличие данных с прошлой сессии, если данных нет, то зарендерится по умолчанию state:
//     if (parsedContactList) {
//       this.setState({ contacts: parsedContactList });
//     }
//   }

//  + addContact = (name, number) => {
//     const formattedNumber = this.formattedNumber(number);
//     const repeatName = this.state.contacts.some(
//       element => element.name.toLowerCase() === name.toLowerCase()
//     );
//     if (repeatName) {
//       return alert(`${name} is already in contacts`);
//     }
//     const contact = {
//       id: nanoid(),
//       name,
//       number: formattedNumber,
//     };
//     this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
//   };

//  + changeFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//  + getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   formattedNumber = number => {
//     let formattedNumber = number.substring(0, 3) + '-';
//     for (let i = 3; i < number.length; i += 1) {
//       if ((i - 3) % 2 === 0 && i !== 3) {
//         formattedNumber += '-';
//       }
//       formattedNumber += number[i];
//     }
//     return formattedNumber;
//   };

//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <Container>
//         <MainTitle>Phonebook</MainTitle>
//         <ContactForm onSubmit={this.addContact} />

//           <Title>Contacts</Title>
//           <Filter value={filter} onChange={this.changeFilter} />
//           {visibleContacts.length ? (
//             <Contacts
//               contacts={visibleContacts}
//               onDeleteContact={this.deleteContact}
//             />
//           ) : (
//             <EmptyText>Nothing found</EmptyText>
//           )}
//       </Container>
//     );
//   }
// }
