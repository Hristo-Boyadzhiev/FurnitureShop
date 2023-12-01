import { useFurnitureContext } from '../../contexts/FurnitureContext'
import CatalogItem from './CatalogItem/CatalogItem'
import { Link } from 'react-router-dom'
import styles from './Catalog.module.css'

export default function Catalog() {
	const { furnitures } = useFurnitureContext()

	const furnituresList = furnitures.map(furniture => <CatalogItem key={furniture._id} furniture={furniture} />)

	return (
<div className={styles["wrapper"]}>
			{furnituresList}

			{furnituresList.length === 0 &&
				<>
					<div className={styles["no-context"]}>
						<p className={styles["no-context-text"]}>No furnitures yet</p>
						<Link to={"/"} className={`${styles["button"]} ${styles["button1"]}`}>Home</Link>
					</div>
				</>}
		</div>
	)
}