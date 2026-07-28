function Card({
  product: { imageCover, title, price, category:{name}, description },
}) {
  return (
    <>
      <div className="col-md-4">
        <div className="card bg-warning-subtle h-100 mycard">
          <img src={imageCover} className="card-img-top" alt= {title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h4 className="card-title text-primary fw-bolder"> price: {price}</h4>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text bg-dark-subtle p-2">
              {name}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
