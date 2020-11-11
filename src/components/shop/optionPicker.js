/* eslint-disable jsx-a11y/no-onchange */

import React from "react"

const OptionPicker = ({ name, options, onChange, selected }) => {
  return (
    <form className="uk-margin-small uk-form-horizontal">
      <div>
        <label
          htmlFor="variants"
          className="uk-form-label"
          data-for="variant-select"
        >
          {name}
        </label>
        <div className="uk-form-controls">
          <select
            name="variants"
            id="variant-select"
            onChange={onChange}
            value={selected}
            className="uk-select uk-width-small"
          >
            {options.map(option => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </form>
  )
}

export default OptionPicker
