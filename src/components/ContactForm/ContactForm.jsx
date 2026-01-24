import css from "./ContactForm.module.css";
import { Component } from "react";
import { nanoid } from "nanoid";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId} className={css.label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          className={css.input}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces."
          required
          id={this.nameInputId}
          value={this.state.name}
          onChange={this.handleChange}
        />

        <label htmlFor={this.numberInputId} className={css.label}>
          Number
        </label>

        <input
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={this.numberInputId}
          className={css.input}
          value={this.state.number}
          onChange={this.handleChange}
        />

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    );
  }
}
