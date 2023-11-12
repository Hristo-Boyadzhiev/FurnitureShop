import { useState, useEffect } from 'react'
import * as furnitureService from '../../Services/furnitureService'
import CatalogItem from './CatalogItem'
import { Link } from 'react-router-dom'

export default function Catalog() {
	const [furnitures, setFurnitures] = useState([])

	useEffect(() => {
		furnitureService.getFurnitures()
			.then(currentFurnitures => {
				setFurnitures(currentFurnitures)
			})
	}, [])

	const furnituresList = furnitures.map(furniture => <CatalogItem key={furniture._id} furniture={furniture} />)

	return (

		<div className="untree_co-section product-section before-footer-section">
			<div className="container">
				<div className="row">

{furnituresList}

{furnitures.length === 0 && 
	<div className="untree_co-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center pt-5">
          <h2 className="display-3 text-black">No articles yet</h2>
          <p><Link to={"/"} className="btn btn-sm btn-outline-black">Home</Link></p>
        </div>
      </div>
    </div>
  </div>
}

				</div>
			</div>
		</div>
	)
}