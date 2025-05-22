import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOperations";
import { selectContacts } from "../../redux/contacts/contactsSelectors";
import { selectFilter } from "../../redux/filters/filtersSelectors";

import css from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          {name}: {number}
          <button onClick={() => handleDelete(id)} className={css.button}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
