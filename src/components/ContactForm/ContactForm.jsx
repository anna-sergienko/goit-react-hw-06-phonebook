import { useState } from 'react'
import PropTypes from 'prop-types';
import { Form, FormLabel, FormInput, AddButton } from './ContactForm.styled';

 const ContactForm = (props) => {

const [name, setName] = useState('');
const [number, setNumber] = useState('');


  const handleInputChange = evt => {
    const {name, value} = evt.target;
  
    switch (name){
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

    default:
      return;
     
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    props.onSubmit({name, number});
    setName('');
    setNumber('');
    evt.target.reset();
  };

    return (
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>

        <FormLabel>
          Number
          <FormInput
            type="tel"
            value={number}
            name="number"
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>

        <AddButton type="submit">Add contact</AddButton>
      </Form>
    );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}


export default ContactForm;