import PropTypes from "prop-types";
import style from "./ContactsListItem.module.css";

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={style.contactItem}>
      {name}: {number}
      <button
        className={style.buttonDel}
        type="submit"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.prototype = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
