import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class AddContact extends Component {
  state = {
    name: '',
    number: '',
  };

  submitHandler = event => {
    event.preventDefault();

    const { name, number } = this.state;

    const id = nanoid();

    this.props.addContact({ name, number, id });

    event.target.reset();
  };

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { submitHandler, inputHandler } = this;
    return (
      <form onSubmit={submitHandler}>
        <div>
          <label>
            <input
              onInput={inputHandler}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan!"
              required
            />
            <b>→ name</b>
          </label>
          <label>
            <input
              onInput={inputHandler}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +!"
              required
            />
            <b>→ number</b>
          </label>
        </div>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
