import { Component } from 'react';
import { nanoid } from 'nanoid';
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

export class App extends Component {
  state = {
    contacts: defaultContacts,
    filter: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    const isDuplicateNumber = contacts.some(
      contact => contact.number === newContact.number
    );

    if (isDuplicate) {
      alert(`'${newContact.name}' is already in contacts.`);
      return;
    }
    if (isDuplicateNumber) {
      alert(`Number '${newContact.number}' is already saved under the name '${newContact.name}'`);
      return;
    }
    
    const contact = {
      ...newContact,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  updateFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) { 
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
      }
  }
  render() {
    const { contacts, filter } = this.state;
    const filterdContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.updateFilter} />
        <ContactList
          contacts={filter === '' ? contacts : filterdContacts}
          onDelete={this.deleteContact}
        />
        <GlobalStyle />
      </>
    );
  }
}
