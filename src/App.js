
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "components/Filter/Filter";
import { Title } from "./App.styled";



export  const App = () => {
    return (
      <div>
        <Title>Phonebook</Title>
        <ContactForm />
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
        
      </div>
    );

  }



