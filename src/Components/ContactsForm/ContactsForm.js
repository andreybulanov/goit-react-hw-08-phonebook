import { useState } from 'react';
import { useCreateContactMutation, useFetchContactsQuery } from '../../Store/contactsSlice';

import { Form, Label, Input } from './ContactsForm.styled';
import { Button } from '../Buttons/Buttons.styled';
import toast, { Toaster } from 'react-hot-toast';

function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [createContact] = useCreateContactMutation();
  const {data: contacts} = useFetchContactsQuery();

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const checkContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (checkContact) {
      toast(`${name} is already in contacts`, {
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          duration: 4000,
        },
      });
      return;
    };
    
    createContact({ name, number });
    setName("");
    setNumber("");
  };

  return (
    <>
      <Form action="" onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <Label htmlFor="number">Number</Label>
        <Input
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <Button type="submit"> Add contact</Button>
      </Form>
      <Toaster />
    </>
  );
}

export default ContactsForm;
