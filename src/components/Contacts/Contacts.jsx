import PropTypes from 'prop-types';

export const Contacts = ({ contacts, filter, deleteContact }) => {
  const clichHandler = ({ target: { name } }) => {
    const id = name;
    deleteContact(id);
  };

  return (
    <>
      <ul>
        {contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(contact => (
            <li key={contact.id}>
              <p>
                <b>{contact.name}:</b> {contact.number}
              </p>
              <button name={contact.id} onClick={clichHandler}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
