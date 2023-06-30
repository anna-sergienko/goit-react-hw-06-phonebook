import { useState, useEffect } from 'react';
import { nanoid } from "nanoid";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import { Title } from "./App.styled";



export  const App = () => {

const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? []);    // componentDidMount() 
const [filter, setFilter] = useState('');

useEffect(() =>{
  localStorage.setItem('contacts', JSON.stringify(contacts))
 }, [contacts])




  const formSubmitHandler = ({ name, number }) => {
    const nameToLowerCase = name.toLowerCase();
    const filterName = contacts.find(contact =>
      contact.name.toLowerCase() === nameToLowerCase,
    );

    if (filterName) {
      return toast.error(`${name} is already in contacts.`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }else{
      setContacts(prevState => {return [{ name, number, id: nanoid()}, ...prevState]})
    }
  }


  const filterChange = e => {
    setFilter(e.target.value);
  };


  const getExsistContacts = () => {
    const generalFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(generalFilter),
    )
  }

  const deleteContact = contactId => {
    setContacts(prevState => (
   prevState.filter(contact => contact.id !== contactId)
    ));
  };

 
    return (
      <div>
        <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={formSubmitHandler} />
        <Title>Contacts</Title>
        <Filter value={filter} onChange={filterChange} />
        <ContactList contacts={getExsistContacts()} onDelContact={deleteContact} />
      </div>
    );

  }



