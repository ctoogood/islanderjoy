import React from "react"

const Thumbnail = ({ isActive, onClick, image }) => {
  const handleClick = () => {
    onClick(image)
  }
  return (
    <input
      className="uk-display-inline-block uk-margin-right"
      style={{ width: "100px", height: "100px", objectFit: "cover" }}
      type="image"
      isactive={isActive.toString()}
      src={image.localFile.url}
      alt="Product Image"
      onClick={handleClick}
    />
  )
}

export default Thumbnail
