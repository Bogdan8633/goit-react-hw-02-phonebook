import PropTypes from 'prop-types';
import styles from './contactBook.module.css';

const ContactBook = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <h2>Contacts</h2>
      <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => (
          <li className={styles.item} key={id}>
            <p className={styles.name}>{name}:</p>
            <p className={styles.number}>{number}</p>
            <button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

// ContactBook.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

export default ContactBook;
