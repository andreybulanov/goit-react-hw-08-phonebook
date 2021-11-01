import { useSelector, useDispatch } from 'react-redux';
import { Form, Container } from 'react-bootstrap';
import { getFilter, getContacts } from '../../Redux/Phonebook/pb-selectors';
import { changeFilter } from '../../Redux/Phonebook/pb-actions';

const Filter = () => {
  const contacts = useSelector(getContacts);
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeHandler = e => dispatch(changeFilter(e.target.value));
  const onBlurHandler = () => dispatch(changeFilter(''));

  if (contacts.length === 0) {
    return <h2 style={{display: 'none'}}>Поиск</h2>
  } else {
    return (
      <Container>
        <Form>
          <Form.Group>
            <h2>Найти контакт по имени</h2>
            <Form.Control
            type="text"
              value={value}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
            />
          </Form.Group>
        </Form>
      </Container>
    )
  }
}

export default Filter;