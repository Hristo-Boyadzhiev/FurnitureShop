import { useForm } from "../../../hooks/useForm"

export default function AddComment({
    onAddCommentSubmit
}) {
    const {formValues, onChangeHandler, onSubmit} = useForm({
        comment: ''
    }, onAddCommentSubmit)

    return (
        <form onSubmit={onSubmit}>
            <h3 className="pull-left">New Comment</h3>
            <button type="submit" className="btn btn-normal pull-right">Submit</button>
            <fieldset>
                <div className="row">
                    <div className="form-group col-xs-12 col-sm-9 col-lg-10">
                        <textarea
                            className="form-control"
                            id="message"
                            name="comment"
                            placeholder="Your comment"
                            value={formValues.comment}
                            onChange={onChangeHandler}
                        ></textarea>
                    </div>
                </div>
            </fieldset>
        </form>
    )
}