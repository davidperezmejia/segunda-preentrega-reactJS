import './Item.css'
import { Link } from "react-router-dom"
const Item = ({id, name, img, price, stock}) => {

    return (
        <article>
            <div className="productosDiv">
                <img src={img} alt={name} />
                <p className="tituloProducto">{name}</p>
                <p className="precio">Precio: {price}</p>
                <button>Comprar</button>
            </div>
            <footer>
                <Link to={`/item/${id}`}>Ver detalle</Link>
            </footer>
        </article>

    )

}

export default Item;