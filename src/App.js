import React, {Component} from 'react'
import PhoneBook from './components/phoneBook/PhoneBook';
import PhoneBookList from './components/phoneBookList/PhoneBookList';
import PhoneBookFilter from './components/phoneBookFilter/PhoneBookFilter';

class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: '',
    contact: '',
    filter: ''
  }

   onHandleChange = (e) =>{ 
     const name = e.target.name;
     const value = e.target.value;
    this.setState({ [name]: value});
  }

  onHandleSubmit = (e) => {
    e.preventDefault();
    const {name, contact} = this.state;
    const newContact = {
      id: `${Date.now()}`, name, contact
    }
    this.setState(prevState => ({contacts: [...prevState.contacts, newContact]}));
    e.target.reset()
    }

    filterInput = (e) =>{
      this.setState({filter: e.target.value});
    }

    filterContacts = () =>{
     return (this.state.filter) 
     ? this.state.contacts.filter(item =>item.name.toLowerCase().includes(this.state.filter))
     : this.state.contacts
    }

    deleteItem = (e) =>{
      const id = e.target.dataset.id;
      console.log(id);
      const resalt = this.state.contacts.filter(item=>item.id!==id);
     this.setState({ contacts:resalt });
    }

  render() {
    return (
      <>
         <h2>Phonebook</h2>
         <PhoneBook onHandleChange={this.onHandleChange} onHandleSubmit={this.onHandleSubmit}/>
         <PhoneBookList contacts={this.filterContacts()} deleteItem={this.deleteItem}/>
         <PhoneBookFilter filter={this.state.filter}  filterInput={this.filterInput}/>
      </>
    );
  }
}

export default App;