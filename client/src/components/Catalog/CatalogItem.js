import { Link } from "react-router-dom"

export default function CatalogItem({
    furniture
}) {

    return (
        <div className="col-12 col-md-4 col-lg-3 mb-5">
            <Link className="product-item" to={`${furniture._id}/details/`}>

                <img src={furniture.imageUrl} className="img-fluid product-thumbnail" alt={furniture.model} />
                <h3 className="product-title">{furniture.model}</h3>
                <strong className="product-price">${furniture.price}</strong>

                <span className="icon-cross">
                    <button type="button" className="btn btn-outline-success">Details</button>
                </span>

                {/* <span className="icon-cross">
                    <img src="images/cross.svg" className="img-fluid" alt={furniture.model}/>
                </span> */}
            </Link>
        </div>
    )
}