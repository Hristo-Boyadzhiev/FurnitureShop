import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { useForm } from "../../hooks/useForm"
import { useValidation } from "../../hooks/useValidation"

import { useFurnitureContext } from "../../contexts/FurnitureContext"
import { useAuthContext } from "../../contexts/AuthContext"

import styles from './Create.module.css'

export default function Create() {
    const navigate = useNavigate()
    const { isAdmin } = useAuthContext()

    useEffect(() => {
        if (!isAdmin) {
            return navigate('/')
        }
    }, [isAdmin, navigate])

    const { onCreateSubmit } = useFurnitureContext()
    const { formValues, onChangeHandler, onSubmit } = useForm({
        model: '',
        price: '',
        imageUrl: '',
        description: ''
    }, onCreateSubmit)

    const { formErrors, onValidateHandler } = useValidation({
        model: '',
        price: '',
        imageUrl: '',
        description: ''
    })

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
                            onBlur={onValidateHandler}
                        />
                        {formErrors.model &&
                            <p className={styles["form-error"]}>
                                {formErrors.model}
                            </p>
                        }
                    </div>
                    <div className={styles["form-line"]}>
                        <label className={styles["top"]} htmlFor="price">Price</label>
                        <input
                            type="text"
                            name="price"
                            className={styles["form-input"]}
                            value={formValues.price}
                            onChange={onChangeHandler}
                            onBlur={onValidateHandler}
                        />
                        {formErrors.price &&
                            <p className={styles["form-error"]}>
                                {formErrors.price}
                            </p>
                        }
                    </div>
                    <div className={styles["form-line"]}>
                        <label className={styles["top"]} htmlFor="imageUrl">ImageUrl</label>
                        <input
                            type="text"
                            name="imageUrl"
                            className={styles["form-input"]}
                            value={formValues.imageUrl}
                            onChange={onChangeHandler}
                            onBlur={onValidateHandler}
                        />
                        {formErrors.imageUrl &&
                            <p className={styles["form-error"]}>
                                {formErrors.imageUrl}
                            </p>
                        }
                    </div>
                    <div className={styles["form-line"]}>
                        <label className={styles["top"]} htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            className={styles["form-input"]}
                            value={formValues.description}
                            onChange={onChangeHandler}
                            onBlur={onValidateHandler}
                        ></textarea>
                        {formErrors.description &&
                            <p className={styles["form-error"]}>
                                {formErrors.description}
                            </p>
                        }
                    </div>

                    <input type="submit" className={styles["form-button"]} value="Submit" />
                </form>
            </div>
        </>
    )
}