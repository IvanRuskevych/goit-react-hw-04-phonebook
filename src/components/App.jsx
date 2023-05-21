import { useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Section from './Section/Section ';
import { toast } from 'react-toastify';
import { useLocalStorage } from 'hooks/useLocalStorage';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  const [filter, setFilter] = useState('');

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const addContact = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      return toast.warn(`${name} is already in contacts`, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else {
      const newContact = {
        id: nanoid(5),
        name,
        number,
      };

      setContacts(prev => [...prev, newContact]);
    }
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const handleFilterContacts = () => {
    const normilizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };

  // const componentDidMount = () => {
  //   const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));

  //   if (localStorageContacts !== null) {
  //     return setContacts(localStorageContacts);
  //   }

  //   setContacts(initialContacts);
  // };

  // const componentDidUpdate = (prevProps, prevState) => {
  //   const prevContacts = prevState.contacts;
  //   const nextContacts = this.state.contacts;

  //   if (prevContacts !== nextContacts) {
  //     return localStorage.setItem('contacts', JSON.stringify(nextContacts));
  //   }
  // };

  return (
    <Section>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactsList
        list={handleFilterContacts()}
        deleteContact={deleteContact}
      />
    </Section>
  );
}
