import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContactsAction } from '../Redux/Phonebook/pb-operations';
import ContactsList from '../Components/ContactsList/ContactsList';
import ContactsForm from '../Components/ContactsForm/ContactsForm';
import Filter from '../Components/Filter/Filter';

export default function ContactsView() {
    const dispatch = useDispatch();

    useEffect(() => dispatch(fetchContactsAction()), [dispatch]);
    return (
        <div>
            <ContactsForm />
            <Filter />
            <ContactsList />
        </div>
    );
};
