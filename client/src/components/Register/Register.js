import { useContext } from "react"
import { useForm } from "../../hooks/useForm"
import { authContext } from "../../contexts/authContext"

export default function Register() {
    const {onRegisterSubmit} = useContext(authContext)
    const {formValues, onChangeHandler, onSubmit} = useForm({
        email: '',
        password: '',
        repeatPassword: ''
    }, onRegisterSubmit)

    return (
        <div className="untree_co-section">
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-md-15 col-lg-8 pb-4">
                        <form method="POST" onSubmit={onSubmit}>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="text-black" htmlFor="email">Email</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formValues.email}
                                            onChange={onChangeHandler}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label className="text-black" htmlFor="password">Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                name="password"
                                                value={formValues.password}
                                                onChange={onChangeHandler}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="text-black" htmlFor="repeatPassword">Repeat password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="repeatPassword"
                                            name="repeatPassword"
                                            value={formValues.repeatPassword}
                                            onChange={onChangeHandler}
                                        />
                                    </div>
                                </div>
                            </div>


                            <button type="submit" className="btn btn-primary-hover-outline">Register</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}