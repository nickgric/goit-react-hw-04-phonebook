import React, { Component } from 'react';

export class Filter extends Component {
  filterHandler = event => {
    this.props.filterContacts(event.target.value);
  };

  render() {
    const { filterHandler } = this;
    return (
      <>
        <p>Find contacts by name:</p>
        <input
          onInput={filterHandler}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </>
    );
  }
}
