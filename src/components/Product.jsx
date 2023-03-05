const Product = ({ slug, title, description, image }) => {
  return (
    <div className="product">
      <div className="product-image-container">
        <a href={`/${slug}`}>
          <img alt={title} className="product-image" src={image} />
          <p className="product-description">{description}</p>
        </a>
      </div>
      <h2 className="product-title">
        <a href={`/${slug}`}>{title}</a>
      </h2>
    </div>
  );
};

export default Product;
