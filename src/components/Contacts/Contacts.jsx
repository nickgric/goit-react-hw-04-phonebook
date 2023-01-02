import React, { Component } from 'react';

export class Contacts extends Component {
  clichHandler = event => {
    const id = event.target.name;
    this.props.deleteContact(id);
  };

  render() {
    const { contacts, filter } = this.props;
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
                <button name={contact.id} onClick={this.clichHandler}>
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </>
    );
  }
}
