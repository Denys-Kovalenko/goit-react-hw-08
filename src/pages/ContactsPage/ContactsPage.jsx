import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectContacts,
  selectContactsLoading,
  selectContactsError,
} from "../../redux/contacts/contactsSelectors";
import { selectFilter } from "../../redux/filters/filtersSelectors";
import {
  fetchContacts,
  deleteContact,
} from "../../redux/contacts/contactsOperations";
import { setFilter } from "../../redux/filters/filtersSlice";
import toast from "react-hot-toast";

import ContactForm from "../../components/ContactForm/ContactForm"; // Імпорт форми
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDelete = (id) => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => toast.success("Contact deleted"))
      .catch((err) => toast.error(err));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className={styles.section}>
      <h2>Your Contacts</h2>

      {}
      <ContactForm />

      {}
      <input
        type="text"
        placeholder="Find contacts by name"
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        className={styles.filterInput}
      />

      {}
      {isLoading && <p>Loading contacts...</p>}
      {error && <p className={styles.error}>Error: {error}</p>}

      {}
      <ul className={styles.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} className={styles.item}>
            <p>
              <b>{name}:</b> {number}
            </p>
            <button onClick={() => onDelete(id)} className={styles.button}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactsPage;
