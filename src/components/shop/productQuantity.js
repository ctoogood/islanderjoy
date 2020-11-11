import React, { useState, useContext } from "react"
import { navigate } from "@reach/router"
import CartContext from "../../context/CartContext"

const ProductQuantity = ({ variantId, available }) => {
  const [quantity, setQuantity] = useState(1)
  const { updateLineItem } = useContext(CartContext)
  const [loading, setLoading] = useState(false)

  const handleQuantityChange = e => {
    setQuantity(e.currentTarget.value)
  }

  const handleSubmit = async e => {
    try {
      e.preventDefault()
      setLoading(true)
      console.log(loading)
      await updateLineItem({ variantId, quantity: parseInt(quantity, 10) })
      setLoading(false)
      navigate(`${origin}/cart`).setTimeout(300)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="uk-position-relative">
      <form onSubmit={handleSubmit} className="uk-form-horizontal">
        <label className="uk-form-label">Quantity</label>
        <div className="uk-form-controls">
          <input
            type="number"
            min="1"
            step="1"
            disabled={!available}
            value={quantity}
            onChange={handleQuantityChange}
            className="uk-input uk-width-small"
          />

          <div className="">
            <button
              type="submit"
              disabled={!available}
              className="uk-button uk-button-secondary uk-margin-medium-top"
            >
              {!loading ? "Add To Cart" : "Loading..."}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ProductQuantity
