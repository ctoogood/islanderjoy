import React, { useState } from "react"
import Thumbnail from "./thumbnail"

const BasicProductImageGallery = ({ selectedVariantImageId, images, alt }) => {
  const [activeImageThumbnail, setActiveImageThumbnail] = useState(
    images.find(({ id }) => id === selectedVariantImageId || images[0])
  )

  React.useEffect(() => {
    setActiveImageThumbnail(
      images.find(({ id }) => id === selectedVariantImageId) || images[0]
    )
  }, [selectedVariantImageId, images, setActiveImageThumbnail])

  const handleClick = image => {
    setActiveImageThumbnail(image)
  }

  const gallery =
    images.length > 1 ? (
      <div className="uk-margin-top">
        {images.map(i => (
          <Thumbnail
            key={i.id}
            isActive={activeImageThumbnail.id === i.id}
            onClick={handleClick}
            image={i}
          />
        ))}
      </div>
    ) : null

  return (
    <section>
      <div>
        <img src={activeImageThumbnail.localFile.url} alt={alt} />
      </div>
      <div>{gallery}</div>
    </section>
  )
}

export default BasicProductImageGallery
