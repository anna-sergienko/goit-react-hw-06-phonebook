import { useSelector, useDispatch } from 'react-redux';
import { onDelContact } from 'redux/contactsSlice';
import { getFilteredContactsList } from 'redux/selectors';
// import PropTypes from 'prop-types';
import {
  ContactsList,
  ContactsItem,
  ContactsName,
  DelContactBtn,
} from './ContactList.styled';

function ContactList () {
  const distpatch = useDispatch();
  const contacts = useSelector(getFilteredContactsList);

return (
  <ContactsList>
    {contacts.map(({ id, name, number }) => (
      <ContactsItem key={id}>
        <ContactsName>
          {name}: {number}
        </ContactsName>
        <DelContactBtn type="button" onClick={() =>distpatch(onDelContact(id))}>
          Delete
        </DelContactBtn>
      </ContactsItem>
    ))}
  </ContactsList>
) }

export default ContactList;

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDelContact: PropTypes.func.isRequired,
// };
