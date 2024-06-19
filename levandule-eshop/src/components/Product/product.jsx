import "./product.css"

export const Product = ({name, img, price, src}) => (
    <div className="productItem">
        <h2>{name}</h2>
        <img src={img} alt="" />
        <p>cena: {price} Kč</p>
        <button><a href={src}>Detail produktu</a></button>
    </div>
)