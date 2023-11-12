export default function Register() {
    return (
        <div className="untree_co-section">
            <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-md-15 col-lg-8 pb-4">
                            <form>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label className="text-black" htmlFor="email">Email</label>
                                            <input type="text" className="form-control" id="email" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label className="text-black" htmlFor="password">Password</label>
                                                <input type="text" className="form-control" id="password" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label className="text-black" htmlFor="repeatPassword">Repeat password</label>
                                            <input type="text" className="form-control" id="repeatPassword" />
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