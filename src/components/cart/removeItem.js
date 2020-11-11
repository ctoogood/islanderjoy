/* eslint-disable jsx-a11y/control-has-associated-label */

import React, { useContext } from "react"
import CartContext from "../../context/CartContext"

const RemoveItem = ({ lineItemId }) => {
  const { removeLineItem } = useContext(CartContext)

  const handleClick = () => {
    removeLineItem(lineItemId)
  }

  return (
    <button
      className="uk-icon"
      style={{ color: "red" }}
      onClick={handleClick}
      data-uk-icon="trash"
    ></button>
  )
}

export default RemoveItem
