import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
           
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Furniture store <span clsas="d-block">Troyan</span></h1>
                                <p className="mb-4">We strive to select and offer quality, beautiful, modern and practical furniture to make your experience in our online store pleasant, useful and satisfying.</p>
                                <p>Happy shopping!</p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="hero-img-wrap">
                                <img src="images/couch.png" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className="product-section">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                            <h2 className="mb-4 section-title">Crafted with excellent material</h2>
                            <p className="mb-4">We believe that everyone deserves real quality. That's why we have a strict supplier selection policy and are careful to provide you with furniture that will be both practical and durable and made with attention to every detail.</p>
                            <p><Link to={"/dada"} className="btn btn-secondary me-2">Shop Now</Link></p>
                        </div>
                       
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <Link className="product-item" to={"cart.html"}>
                                <img src="images/product-1.png" className="img-fluid product-thumbnail" alt="" />
                                <h3 className="product-title">Valencia Chair</h3>
                                <strong className="product-price">$50.00</strong>

                                <span className="icon-cross">
                                    <img src="images/cross.svg" className="img-fluid" alt="" />
                                </span>
                            </Link>
                        </div>
                        {/* <!-- End Column 2 --> */}

                        {/* <!-- Start Column 3 --> */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <Link className="product-item" to={"cart.html"}>
                                <img src="images/product-2.png" className="img-fluid product-thumbnail" alt="" />
                                <h3 className="product-title">Kasia Aero Chair</h3>
                                <strong className="product-price">$78.00</strong>

                                <span className="icon-cross">
                                    <img src="images/cross.svg" className="img-fluid" alt="" />
                                </span>
                            </Link>
                        </div>
                        {/* <!-- End Column 3 --> */}

                        {/* <!-- Start Column 4 --> */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <Link className="product-item" to={"cart.html"}>
                                <img src="images/product-3.png" className="img-fluid product-thumbnail" alt="" />
                                <h3 className="product-title">Clara Chair</h3>
                                <strong className="product-price">$43.00</strong>

                                <span className="icon-cross">
                                    <img src="images/cross.svg" className="img-fluid" alt="" />
                                </span>
                            </Link>
                        </div>
                        {/* <!-- End Column 4 --> */}

                    </div>
                </div>
            </div>
            {/* <!-- End Product Section --> */}

            {/* <!-- Start Why Choose Us Section --> */}
            <div className="why-choose-section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            {/* <h2 className="section-title">Why Choose Us</h2>
                            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p> */}

                            <div className="row my-5">
                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img src="images/truck.svg" alt="Image" className="imf-fluid" />
                                        </div>
                                        <h3>Fast &amp; Free Shipping</h3>
                                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                    </div>
                                </div>

                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img src="images/bag.svg" alt="Image" className="imf-fluid" />
                                        </div>
                                        <h3>Easy to Shop</h3>
                                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                    </div>
                                </div>

                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img src="images/support.svg" alt="Image" className="imf-fluid" />
                                        </div>
                                        <h3>24/7 Support</h3>
                                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                    </div>
                                </div>

                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img src="images/return.svg" alt="Image" className="imf-fluid" />
                                        </div>
                                        <h3>Hassle Free Returns</h3>
                                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="img-wrap">
                                <img src="images/why-choose-us-img.jpg" alt="Image" className="img-fluid" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- End Why Choose Us Section --> */}

            {/* <!-- Start We Help Section --> */}
            {/* <div className="we-help-section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <div className="imgs-grid">
                                <div className="grid grid-1"><img src="images/img-grid-1.jpg" alt="Untree.co" /></div>
                                <div className="grid grid-2"><img src="images/img-grid-2.jpg" alt="Untree.co" /></div>
                                <div className="grid grid-3"><img src="images/img-grid-3.jpg" alt="Untree.co" /></div>
                            </div>
                        </div>
                        <div className="col-lg-5 ps-lg-5">
                            <h2 className="section-title mb-4">We Will Help you make the right choice</h2>
                            <p>Home is our fortress, the English say. And in serving us as such, we need our home to symbolize a harmony that is hard to find in the outside world.</p>
                            <p>We offer you an overview of some fashion trends and advice from designers and architects to create a modern stylish interior.</p>
                            <p>For more information visit our blog.</p>

                            <p><Link to={"/blog"} className="btn">Blog</Link></p>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- End We Help Section --> */}

            {/* <!-- Start Popular Product --> */}
            {/* <div className="popular-product">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="product-item-sm d-flex">
                                <div className="thumbnail">
                                    <img src="images/product-1.png" alt="Image" className="img-fluid" />
                                </div>
                                <div className="pt-3">
                                    <h3>Nordic Chair</h3>
                                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
                                    <p><a to="#">Read More</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="product-item-sm d-flex">
                                <div className="thumbnail">
                                    <img src="images/product-2.png" alt="Image" className="img-fluid" />
                                </div>
                                <div className="pt-3">
                                    <h3>Kruzo Aero Chair</h3>
                                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
                                    <p><a to="#">Read More</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="product-item-sm d-flex">
                                <div className="thumbnail">
                                    <img src="images/product-3.png" alt="Image" className="img-fluid" />
                                </div>
                                <div className="pt-3">
                                    <h3>Ergonomic Chair</h3>
                                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
                                    <p><a to="#">Read More</a></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}
            {/* <!-- End Popular Product --> */}

            {/* <!-- Start Testimonial Slider --> */}
            {/* <div className="testimonial-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mx-auto text-center">
                            <h2 className="section-title">Testimonials</h2>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="testimonial-slider-wrap text-center">

                                <div id="testimonial-nav">
                                    <span className="prev" data-controls="prev"><span className="fa fa-chevron-left"></span></span>
                                    <span className="next" data-controls="next"><span className="fa fa-chevron-right"></span></span>
                                </div>

                                <div className="testimonial-slider">

                                    <div className="item">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8 mx-auto">

                                                <div className="testimonial-block text-center">
                                                    <blockquote className="mb-5">
                                                        <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                                                    </blockquote>

                                                    <div className="author-info">
                                                        <div className="author-pic">
                                                            <img src="images/person-1.png" alt="Maria Jones" className="img-fluid" />
                                                        </div>
                                                        <h3 className="font-weight-bold">Maria Jones</h3>
                                                        <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div> */}
            {/* <!-- END item --> */}

            {/* <div className="item">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8 mx-auto">

                                                <div className="testimonial-block text-center">
                                                    <blockquote className="mb-5">
                                                        <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                                                    </blockquote>

                                                    <div className="author-info">
                                                        <div className="author-pic">
                                                            <img src="images/person-1.png" alt="Maria Jones" className="img-fluid" />
                                                        </div>
                                                        <h3 className="font-weight-bold">Maria Jones</h3>
                                                        <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div> */}
            {/* </div> */}
            {/* <!-- END item --> */}

            {/* <div className="item">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8 mx-auto">

                                                <div className="testimonial-block text-center">
                                                    <blockquote className="mb-5">
                                                        <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                                                    </blockquote>

                                                    <div className="author-info">
                                                        <div className="author-pic">
                                                            <img src="images/person-1.png" alt="Maria Jones" className="img-fluid" />
                                                        </div>
                                                        <h3 className="font-weight-bold">Maria Jones</h3>
                                                        <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div> */}
            {/* <!-- END item --> */}

            {/* </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- End Testimonial Slider --> */}

            {/* <!-- Start Blog Section --> */}
            <div className="blog-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-6">
                            <h2 className="section-title">Recent Blog</h2>
                        </div>
                        <div className="col-md-6 text-start text-md-end">
                            <Link to={"/blog"} className="more">View All Posts</Link>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                            <div className="post-entry">
                                <Link to={"/dada"} className="post-thumbnail"><img src="images/post-1.jpg" alt="Image" className="img-fluid" /></Link>
                                <div className="post-content-entry">
                                    <h3><a to="#">First Time Home Owner Ideas</a></h3>
                                    <div className="meta">
                                        <span>by <Link to={"#"}>Kristin Watson</Link></span> <span>on <Link to={"#"}>Dec 19, 2021</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                            <div className="post-entry">
                                <Link to="#" className="post-thumbnail"><img src="images/post-2.jpg" alt="Image" className="img-fluid" /></Link>
                                <div className="post-content-entry">
                                    <h3><Link to={"/dada"}>How To Keep Your Furniture Clean</Link></h3>
                                    <div className="meta">
                                        <span>by <Link to={"#"}>Robert Fox</Link></span> <span>on <Link to={"#"}>Dec 15, 2021</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                            <div className="post-entry">
                                <Link to={"#"} className="post-thumbnail"><img src="images/post-3.jpg" alt="Image" className="img-fluid" /></Link>
                                <div className="post-content-entry">
                                    <h3><Link to={"#"}>Small Space Furniture Apartment Ideas</Link></h3>
                                    <div className="meta">
                                        <span>by <Link to={"#"}>Kristin Watson</Link></span> <span>on <Link to="#">Dec 12, 2021</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- End Blog Section -->	 */}

            {/* <!-- Start Footer Section --> */}
            <footer className="footer-section">
                <div className="container relative">

                    {/* <div className="sofa-img">
                        <img src="images/sofa.png" alt="Image" className="img-fluid" />
                    </div>

                    <div className="row">
                        <div className="col-lg-8">
                            <div className="subscription-form">
                                <h3 className="d-flex align-items-center"><span className="me-1"><img src="images/envelope-outline.svg" alt="Image" className="img-fluid" /></span><span>Subscribe to Newsletter</span></h3>

                                <form action="#" className="row g-3">
                                    <div className="col-auto">
                                        <input type="text" className="form-control" placeholder="Enter your name" />
                                    </div>
                                    <div className="col-auto">
                                        <input type="email" className="form-control" placeholder="Enter your email" />
                                    </div>
                                    <div className="col-auto">
                                        <button className="btn btn-primary">
                                            <span className="fa fa-paper-plane"></span>
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div> */}

                    <div className="row g-5 mb-5">
                        <div className="col-lg-4">
                            {/* <div className="mb-4 footer-logo-wrap"><Link to={"#"} className="footer-logo">Furni<span>.</span></Link></div> */}
                            {/* <p className="mb-4">Customer Service</p>
                            <p className="mb-4">For information or orders by phone: 0887 123 456</p>
                            <p className="mb-4">Monday - Friday: 9:00 - 18:30</p>
                            <p className="mb-4">Saturday: 9:00 a.m. to 3:30 p.m</p> */}

                            {/* <ul className="list-unstyled custom-social">
                                <li><Link to={"#"}><span className="fa fa-brands fa-facebook-f"></span></Link></li>
                                <li><Link to={"#"}><span className="fa fa-brands fa-twitter"></span></Link></li>
                                <li><Link to={"#"}><span className="fa fa-brands fa-instagram"></span></Link></li>
                                <li><Link to={"#"}><span className="fa fa-brands fa-linkedin"></span></Link></li>
                            </ul> */}
                        </div>

                        <div className="col-lg-8">
                            <div className="row links-wrap">
                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">
                                          <li><Link to={"#"}>Shop</Link></li>
                                        <li><Link to={"/about"}>About us</Link></li>
                                        <li><Link to={"#"}>Blog</Link></li>
                                        <li><Link to={"#"}>Contact us</Link></li>
                                    </ul>
                                </div>

                                {/* <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">
                                        <li><Link to={"#"}>Support</Link></li>
                                        <li><Link to={"#"}>Knowledge base</Link></li>
                                        <li><Link to={"#"}>Live chat</Link></li>
                                    </ul>
                                </div> */}

                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">
                                    <li><Link to={"#"}>Delivery</Link></li>
                                    <li><Link to={"#"}>Terms & Conditions</Link></li>
                                    <li><Link to={"#"}>Privacy Policy</Link></li>
                                    <li><Link to={"#"}>Warranty Service</Link></li>
                                    </ul>
                                </div>

                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">
                                    <li><Link to={"#"}>Exchange of goods</Link></li>
                                    <li><Link to={"#"}>FAQ</Link></li>

                                    </ul>
                                </div>

                                {/* <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">
                                        <li><Link to={"#"}>Nordic Chair</Link></li>
                                        <li><Link to={"#"}>Kruzo Aero</Link></li>
                                        <li><Link to={"#"}>Ergonomic Chair</Link></li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>

                    </div>

                    <div className="border-top copyright">
                        <div className="row pt-4">
                            <div className="col-lg-6">
                                <p className="mb-2 text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by <a to="https://untree.co">Untree.co</a> Distributed By <a tof="https://themewagon.com">ThemeWagon</a>
                                </p>
                            </div>

                            <div className="col-lg-6 text-center text-lg-end">
                                <ul className="list-unstyled d-inline-flex ms-auto">
                                    <li className="me-4"><a to="#">Terms &amp; Conditions</a></li>
                                    <li><Link to={"#"}>Privacy Policy</Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}