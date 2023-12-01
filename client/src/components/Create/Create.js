import { useForm } from "../../hooks/useForm"
import { useFurnitureContext } from "../../contexts/FurnitureContext"
import styles from './Create.module.css'

export default function Create() {
    const { onCreateSubmit } = useFurnitureContext()
    const { formValues, onChangeHandler, onSubmit } = useForm({
        model: '',
        price: '',
        imageUrl: '',
        description: ''
    }, onCreateSubmit)

    return (
        <>
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
    </>
    )
}