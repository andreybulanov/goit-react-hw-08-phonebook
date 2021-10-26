import { useState, useEffect } from 'react';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from '../../Store/contactsSlice';

import { List, ListItem } from './ContactsList.styled';
import { Button } from '../Buttons/Buttons.styled';
import Filter from '../Filter/Filter';

function ContactsList() {
  const [contacts, setContacts] = useState([]);
  const { data } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  useEffect(() => {
    if (data) {
      setContacts(data);
    }
  }, [data]);

  const onFilterContacts = filter => {
    if (filter) {
      const normalizeFilter = filter.toLowerCase();
      const filterValue = contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizeFilter),
      );

      setContacts(filterValue);
    } else {
      setContacts(data);
    }
  };

  return (
    <div>
      <Filter filter={onFilterContacts} />
      <List>
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            {name} - {number}{' '}
            <Button type="button" onClick={() => deleteContact(id)}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ContactsList;

// Я это оставлю как пример

// import { useSelector } from 'react-redux';
// import { useFetchContactsQuery, useDeleteContactMutation } from '../../Store/contactsSlice';
// import { getFilter } from '../../Selectors/contacts-selectors';
// import { List, ListItem } from './ContactsList.styled';
// import { Button } from '../Buttons/Buttons.styled';

// function ContactsList() {
//   const { data: contacts } = useFetchContactsQuery();
//   const [deleteContact] = useDeleteContactMutation();
//   const filterValue = useSelector(state => getFilter(state));
//   contacts.filter(contact => contact.name.toLowerCase().includes(filterValue));
  

//   return (
//     <>
//       <List>
//         {contacts.map(({ id, name, number}) => (
//           <ListItem key={id}>
//               {name} - {number}{' '}
//               <Button type="button" onClick={() => deleteContact(id)}>
//                 Delete
//               </Button>
//             </ListItem>
//         ))}
//       </List>
//     </>
//   );
// }

// export default ContactsList;
