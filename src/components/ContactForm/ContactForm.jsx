import { Component } from 'react';
import * as React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = { name: '', number: '' };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState(() => ({ name: '', number: '' }));
  };

  handleChange = name => e => {
    this.setState(() => ({ [name]: e.target.value }));
  };

  render() {
    return (
      <form
        autoComplete="off"
        onSubmit={this.handleSubmit}
        className={css.list}
      >
        <label>
          <TextField
            inputProps={{
              pattern:
                "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
            }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange('name')}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <TextField
            inputProps={{
              // inputMode: 'numeric',
              pattern:
                '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
            }}
            id="outlined-basic"
            label="Number"
            variant="outlined"
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange('number')}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </form>
    );
  }
}

export default ContactForm;
