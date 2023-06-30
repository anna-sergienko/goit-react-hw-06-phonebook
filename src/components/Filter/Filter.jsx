import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
// import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

function Filter ()  {
  const dispatch = useDispatch();

  const onChange = evt => {
    dispatch(filterContacts(evt.target.value));
  };

  return (
    <FilterLabel>
    Find contacts by name
    <FilterInput type="text" name="filter" onChange={onChange} />
  </FilterLabel>
  )
}

export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
