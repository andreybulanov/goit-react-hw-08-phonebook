import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Button, ListGroupItem } from 'react-bootstrap';
import * as phonebookOperation from '../../Redux/Phonebook/pb-operations';
import { getFilteredContacts } from '../../Redux/Phonebook/pb-selectors'

const ContactsList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phonebookOperation.fetchContactsAction());
  }, [dispatch]);

  const onDeleteContacts = id => dispatch(phonebookOperation.deleteContactsAction(id));

  if (contacts.length === 0) {
    return <h2 className="nome-title">Контактов в списке нет</h2>
  } else {
    return (
      <Container>
        <h2>Список контактов</h2>
        {contacts.map(({ id, name, number }) => (
          <ListGroupItem key={id}>
            {name} : {number}
            <Button onClick={() => onDeleteContacts(id)}>Удалить</Button>
          </ListGroupItem>
        ))}
      </Container>
    );
  }
};

export default ContactsList;