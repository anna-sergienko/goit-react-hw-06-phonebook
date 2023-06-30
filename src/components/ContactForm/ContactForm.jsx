
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from "nanoid";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Form, FormLabel, FormInput, AddButton } from './ContactForm.styled';
import { addContact } from 'redux/contactsSlice';
import { selectContacts } from 'redux/selectors';

 const ContactForm = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);


  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const addedContact = {
      id: nanoid(),
      name: form.elements.name.value,
      number: form.elements.number.value,
  };

  evt.target.reset();

  const filterName = contacts.find(contact =>
    contact.name.toLowerCase() === addedContact.name.toLowerCase()
  );

  

  if (filterName) {
    return toast.error(`${addedContact.name} is already in contacts.`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });  
  }

  dispatch(addContact(addedContact));
  }

    return (
      <>
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>

        <FormLabel>
          Number
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <AddButton type="submit">Add contact</AddButton>
      </Form>
      </>
    );

 }




// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// }

 
export default ContactForm;

