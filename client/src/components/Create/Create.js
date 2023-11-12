import { useState } from "react"

export default function Create({
    onSubmitCreateHandler
}) {
    const [formValues, setFormValues] = useState({
        model: '',
        price: '',
        imageUrl: '',
        description: ''
    })

    const onChangeHandler = (event) => {
        setFormValues(state => ({ ...state, [event.target.name]: event.target.value }))
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        onSubmitCreateHandler(formValues)
    }

    return (
        <div className="untree_co-section">
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-md-15 col-lg-8 pb-4">
                        <form onSubmit={onSubmitHandler}>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="text-black" htmlFor="model">Model</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="model"
                                            id="model"
                                            value={formValues.model}
                                            onChange={onChangeHandler}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label className="text-black" htmlFor="price">Price</label>
                                            <input
                                            type="text"
                                            className="form-control"
                                            name="price"
                                            id="price"
                                            value={formValues.price}
                                            onChange={onChangeHandler}
                                        />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label className="text-black" htmlFor="imageUrl">Image</label>
                                            <input
                                            type="text"
                                            className="form-control"
                                            name="imageUrl"
                                            id="imageUrl"
                                            value={formValues.imageUrl}
                                            onChange={onChangeHandler}
                                        />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label className="text-black" htmlFor="description">Description</label>
                                            <textarea
                                                name="description"
                                                id="description"
                                                className="form-control"
                                                cols="30"
                                                rows="10"
                                                value={formValues.description}
                                                onChange={onChangeHandler}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <button type="submit" className="btn btn-primary-hover-outline">Create</button>
                        </form>
                    </div>
                </div>
            </div >

        </div >
    )
}