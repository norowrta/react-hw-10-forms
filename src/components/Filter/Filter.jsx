import React from "react";
import css from "./filter.module.css";

const Filter = ({ value, onChange }) => (
  <label className={css.label}>
    Find contacts by name
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={css.input}
    />
  </label>
);

export default Filter;
