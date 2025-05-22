import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeNumber = (e) => setNumber(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const normalizedNewName = name.toLowerCase();
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === normalizedNewName
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));

    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        <span>Name</span>
        <input
          type="text"
          value={name}
          onChange={handleChangeName}
          required
          pattern="^[a-zA-Zа-яА-Я\s]+$"
          title="Name may contain only letters and spaces."
        />
      </label>
      <label>
        <span>Number</span>
        <input
          type="tel"
          value={number}
          onChange={handleChangeNumber}
          required
          pattern="^\+?[0-9\s\-]+$"
          title="Phone number must contain digits and can include spaces, dashes, and an optional leading +"
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
