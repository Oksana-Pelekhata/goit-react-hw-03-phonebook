
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList/';
import { FilterForm } from './FilterForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    // console.log("App compdidmount")
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'))

    if (parsedContacts) {
       this.setState({contacts: parsedContacts })
    }
  }

  componentDidUpdate(prevprops, prevstate) {
    const { contacts} = this.state;
    // console.log("component did update")
    // console.log(this.state.contacts)
    // console.log(prevstate.contacts)
    if (contacts !== prevstate.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    }
  }

  addContact = (name, number) => {
    const checkName = this.state.contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (checkName) {
      return alert(`${name} is already in contacts.`);
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    const { contacts, filter } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <ContactForm addContact={this.addContact} />
        <FilterForm
          label="Find contacts by name"
          onChange={this.handleFilterChange}
          value={filter}
        />
        {contacts.length === 0 ? (
          <p>You don't have contacts yet</p>
        ) : (
          <ContactList
            options={filteredContacts}
            removeContact={this.removeContact}
          />
        )}
      </ThemeProvider>
    );
  }
}