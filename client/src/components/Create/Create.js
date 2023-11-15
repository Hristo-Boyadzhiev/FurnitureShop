import { useForm } from "../../hooks/useForm"

export default function Create({
    furniture
}) {
    const { formValues, onChangeHandler, onSubmit } = useForm(furniture ?
        {
            model: furniture.model,
            price: furniture.price,
            imageUrl: furniture.imageUrl,
            description: furniture.description
        } :
        {
            model: '',
            price: '',
            imageUrl: '',
            description: ''
        })

    return (
        <div className="untree_co-section">
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-md-15 col-lg-8 pb-4">
                        <form onSubmit={furniture ?(event)=>onSubmit(event, furniture._id) :onSubmit}>
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

                            <button type="submit" className="btn btn-primary-hover-outline">{furniture ?'Edit' :'Create'}</button>
                        </form>
                    </div>
                </div>
            </div >

        </div >
    )
}