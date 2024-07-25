const Card = ({imgSrc, imgAlt, description, price}) => {
  return (
    <div className="carousel-card">
      <div className="card-container">
          <img src={imgSrc} alt={imgAlt} className="card-image"/>
          <div className="card-info">
            <div>
              <p>{description}</p>
            </div>
            <div className="button-area">
              <p>{price}</p>
              <button type="button">
                Add to Cart
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card;