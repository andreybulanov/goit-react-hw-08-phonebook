import { PrimaryTitle, SecondaryTitle } from './App.styled.jsx';
import ContactsForm from '../ContactsForm/ContactsForm';
import ContactsList from '../ContactsList/ContactsList';


export function App() {
  return (
    <>
      <PrimaryTitle>Phonebook</PrimaryTitle>
      <ContactsForm />

      <SecondaryTitle>Contacts</SecondaryTitle>
      
      <ContactsList />
    </>
  );
}
