import { useForm } from "../../hooks/useForm"
import { useEffect } from "react"
import * as furnitureService from "../../services/furnitureService"
import { useParams, useNavigate } from "react-router-dom"
import { useFurnitureContext } from "../../contexts/FurnitureContext"
import { useAuthContext } from "../../contexts/AuthContext"
import styles from './Edit.module.css'

export default function Edit() {
    const { furnitureId } = useParams()
    const { onEditSubmit } = useFurnitureContext()
    const { userId } = useAuthContext()
    const navigate = useNavigate()
    const { formValues, onChangeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        model: '',
        price: '',
        imageUrl: '',
        description: ''
    }, onEditSubmit)

    useEffect(() => {
        furnitureService.getFurniture(furnitureId)
            .then(furniture => {
                const isOwner = userId === furniture._ownerId
                if (!isOwner) {
                    return navigate('/catalog')
                } else {
                    changeValues(furniture)
                }
            })
    }, [furnitureId, userId, navigate])

    return (
        <div className={styles["create-container"]}>
        <form className={styles["form-container"]} method="POST" onSubmit={onSubmit}>
            <div className={styles["headline"]}><span>Create Furniture</span></div>
            <div className={styles["form-line"]}>
                <label className={styles["top"]} htmlFor='model'>Model</label>
                <input
                    type="text"
                    name='model'
                    className={styles["form-input"]}
                    value={formValues.model}
                    onChange={onChangeHandler}
                />
            </div>
            <div className={styles["form-line"]}>
                <label className={styles["top"]} htmlFor="price">Price</label>
                <input
                    type="text"
                    name="price"
                    className={styles["form-input"]}
                    value={formValues.price}
                    onChange={onChangeHandler}
                />
            </div>
            <div className={styles["form-line"]}>
                <label className={styles["top"]} htmlFor="imageUrl">ImageUrl</label>
                <input
                    type="text"
                    name="imageUrl"
                    className={styles["form-input"]}
                    value={formValues.imageUrl}
                    onChange={onChangeHandler}
                />

            </div>
            <div className={styles["form-line"]}>
                <label className={styles["top"]} htmlFor="description">Description</label>
                <textarea
                    name="description"
                    className={styles["form-input"]}
                    value={formValues.description}
                    onChange={onChangeHandler}
                ></textarea>
            </div>

            <input type="submit" className={styles["form-button"]} value="Submit" />
        </form>
    </div>
    )
}