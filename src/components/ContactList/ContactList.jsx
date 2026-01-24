import css from "./contactList.module.css";
import { Component } from "react";

export default class ContactList extends Component {
  render() {
    return (
      <ul className={css.list}>
        {this.props.contacts.map(({ id, name, number }) => (
          <li key={id} className={css.item}>
            <p>
              {name}: {number}
            </p>

            <button
              className={css.button}
              type="button"
              onClick={() => this.props.onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
