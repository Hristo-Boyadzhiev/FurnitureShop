import { Link } from "react-router-dom"

import styles from "./CatalogItem.module.css"

export default function CatalogItem({
  furniture
}) {

  return (
    <div className={styles["card"]}>
      <div className={styles["content"]}>
        <div className={styles["front"]} style={{ backgroundImage: `url(${furniture.imageUrl})`, backgroundSize: '80%', backgroundRepeat: "no-repeat" }}>
          <div className={styles["inner"]}>
            <Link to={`/catalog/${furniture._id}/details`} className={styles["button"]}>Details</Link>
          </div>
        </div>
      </div>
    </div>
  )
}