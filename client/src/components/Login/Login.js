import { useContext } from "react"
import { useForm } from "../../hooks/useForm"
import { authContext } from "../../contexts/AuthContext"

export default function Login() {
    const { onLoginSubmit } = useContext(authContext)
    
    const { formValues, onChangeHandler, onSubmit } = useForm({
        email: '',
        password: ''
    }, onLoginSubmit)

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
                            <button type="submit" className="btn btn-primary-hover-outline">Login</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}