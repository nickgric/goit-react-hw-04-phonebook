import React, { Component } from 'react';

import { nanoid } from 'nanoid';
import { generateName } from './utils/randomname';

import { Section } from './Section';
import { AddContact } from './AddContact';
import { Filter } from './Filter';
import { Contacts } from './Contacts';

export class App extends Component {
  state = {
    contacts: [
      {
        id: nanoid(),
        name: `${generateName()} (example contact)`,
        number: '096-12345678',
      },
      {
        id: nanoid(),
        name: `${generateName()} (example contact)`,
        number: '097-12345678',
      },
      {
        id: nanoid(),
        name: `${generateName()} (example contact)`,
        number: '098-12345678',
      },
      {
        id: nanoid(),
        name: `${generateName()} (example contact)`,
        number: '099-12345678',
      },
      {
        id: nanoid(),
        name: `${generateName()} (example contact)`,
        number: '099-12345678',
      },
      {
        id: nanoid(),
        name: `${generateName()} (example contact)`,
        number: '099-12345678',
      },
      {
        id: nanoid(),
        name: `${generateName()} (example contact)`,
        number: '099-12345678',
      },
      {
        id: nanoid(),
        name: `${generateName()} (example contact)`,
        number: '099-12345678',
      },
      {
        id: nanoid(),
        name: `${generateName()} (example contact)`,
        number: '099-12345678',
      },
      {
        id: nanoid(),
        name: `${generateName()} (example contact)`,
        number: '099-12345678',
      },
    ],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      const savedContacts = JSON.parse(localStorage.getItem('contacts'));
      this.setState({ contacts: [...savedContacts] });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts === contacts) {
      return;
    }

    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  filterContacts = input => {
    this.setState({ filter: input });
  };

  addContact = newContact => {
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts!`);
    }

    this.setState(prevState => {
      const newState = {
        contacts: [newContact, ...prevState.contacts],
      };
      return newState;
    });
  };

  deleteContact = id => {
    this.setState(prevState => {
      const newContacts = prevState.contacts.filter(
        contact => contact.id !== id
      );
      return { contacts: [...newContacts] };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const {
      submitHandler,
      inputHandler,
      filterContacts,
      addContact,
      deleteContact,
    } = this;

    return (
      <>
        <h1>React-HW03_01 @nickgric</h1>
        <Section title="Phonebook">
          <AddContact
            submitHandler={submitHandler}
            inputHandler={inputHandler}
            addContact={addContact}
          />
        </Section>
        <Section title="Contacts">
          <Filter filterContacts={filterContacts} />
          <Contacts
            contacts={contacts}
            filter={filter}
            deleteContact={deleteContact}
          />
        </Section>
      </>
    );
  }
}
