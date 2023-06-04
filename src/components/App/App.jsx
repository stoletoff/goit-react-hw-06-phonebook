import React, { Component } from 'react';
import {
  Container,
  MainTitle,
  Title,
  EmptyText,
} from './App.styled';
import { nanoid } from 'nanoid';
import contactsData from 'components/data/contacts.json';

import { ContactForm } from 'components/ContactForm';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';

export class App extends Component {
  state = {
    contacts: contactsData,
    filter: '',
  };

  addContact = (name, number) => {
    const formattedNumber = this.formattedNumber(number);
    const repeatName = this.state.contacts.some(
      element => element.name.toLowerCase() === name.toLowerCase()
    );
    if (repeatName) {
      return alert(`${name} is already in contacts`);
    }
    const contact = {
      id: nanoid(),
      name,
      number: formattedNumber,
    };
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formattedNumber = number => {
    let formattedNumber = number.substring(0, 3) + '-';
    for (let i = 3; i < number.length; i += 1) {
      if ((i - 3) % 2 === 0 && i !== 3) {
        formattedNumber += '-';
      }
      formattedNumber += number[i];
    }
    return formattedNumber;
  };
  componentDidUpdate(prevState) {
    if (this.state.contacts === prevState.contacts) {
    }
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onSubmit={this.addContact} />

          <Title>Contacts</Title>
          <Filter value={filter} onChange={this.changeFilter} />
          {visibleContacts.length ? (
            <Contacts
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          ) : (
            <EmptyText>Nothing found</EmptyText>
          )}
      </Container>
    );
  }
}
