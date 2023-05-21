import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Section from './Section/Section ';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount = () => {
    const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));
    console.log(localStorageContacts);

    if (localStorageContacts !== null) {
      return this.setState({ contacts: localStorageContacts });
    }

    this.setState({ contacts: initialContacts });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const prevContacts = prevState.contacts;
    const nextContacts = this.state.contacts;

    if (prevContacts !== nextContacts) {
      return localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  };

  handleChange = name => e => {
    this.setState(() => ({ [name]: e.target.value }));
  };

  addContact = (name, number) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    } else {
      const newContact = {
        id: nanoid(5),
        name,
        number,
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterContacts = () => {
    const { filter, contacts } = this.state;
    const normilizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };

  render() {
    const filteredContacts = this.handleFilterContacts();
    return (
      <Section>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filterValue={this.state.filter} onChange={this.handleChange} />
        <ContactsList
          list={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </Section>
    );
  }
}

export default App;
