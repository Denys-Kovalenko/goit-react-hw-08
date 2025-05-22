import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOperations";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contact}>
      <p className={css.text}>
        {contact.name}: {contact.number}
      </p>
      <button onClick={handleDelete} className={css.button}>
        Delete
      </button>
    </div>
  );
}
