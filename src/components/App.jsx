import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const KEY = 'contacts';

const getSavedContacts = () => {
  const savedContacts = window.localStorage.getItem(KEY);
  return savedContacts !== null ? JSON.parse(savedContacts) : defaultContacts;
};

export const App = () => {
  const [contacts, setContacts] = useState(getSavedContacts);
  const [filter, setFilters] = useState('');

  const updateFilter = newFilter => {
    setFilters(newFilter);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const addContact = newContact => {
    const isDuplicateName = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    const isDuplicateNumber = contacts.some(
      contact => contact.number === newContact.number
    );

    if (isDuplicateName) {
      toast.error(`'${newContact.name}' is already in contacts.`);
      return;
    }

    if (isDuplicateNumber) {
      toast.error(
        `Number '${newContact.number}' is already saved under the name '${newContact.name}'`
      );
      return;
    }

    const contact = {
      ...newContact,
      id: nanoid(),
    };

    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const getFilteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const filteredContacts = getFilteredContacts();

  useEffect(() => {
    window.localStorage.setItem(KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={updateFilter} />
      <ContactList
        contacts={filter === '' ? contacts : filteredContacts}
        onDelete={deleteContact}
      />
      <GlobalStyle />
      <Toaster />
    </>
  );
};
