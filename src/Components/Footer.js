import {Link} from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
export default function Footer() {
    return (

        <footer className="text-center text-lg-start text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-1 border-bottom">
                <div className="me-5 d-none d-lg-block" style={{color:"white"}}>
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <Link to="" className="me-4 text-reset">
                        <i className="fa fa-facebook" style={{color:"white",width:"20px"}}></i>
                    </Link>
                    <a href="" className="me-4 text-reset">
                        <i className="fa fa-twitter" style={{color:"white",width:"20px"}}></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fa fa-google" style={{color:"white",width:"20px"}}></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fa fa-instagram" style={{color:"white",width:"20px"}}></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fa fa-linkedin" style={{color:"white",width:"20px"}} ></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fa fa-github" style={{color:"white",width:"20px"}}></i>
                    </a>
                </div>
            </section>
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fa fa-gem me-3"></i>Company name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p style={{marginLeft:"-100px",marginTop:"10px"}}>
                                <a href="#!" className="text-reset">Angular</a>
                            </p>
                            <p style={{marginLeft:"-100px",marginTop:"1px"}}>
                                <a href="#!" className="text-reset">React</a>
                            </p>
                            <p style={{marginLeft:"-100px",marginTop:"1px"}}>
                                <a href="#!" className="text-reset">Vue</a>
                            </p>
                            <p style={{marginLeft:"-100px",marginTop:"1px"}}>
                                <a href="#!" className="text-reset">Laravel</a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p style={{marginLeft:"-100px",marginTop:"1px"}}>
                                <a href="#!" className="text-reset">Pricing</a>
                            </p>
                            <p style={{marginLeft:"-100px",marginTop:"1px"}}>
                                <a href="#!" className="text-reset">Settings</a>
                            </p>
                            <p style={{marginLeft:"-100px",marginTop:"1px"}}>
                                <a href="#!" className="text-reset">Orders</a>
                            </p>
                            <p style={{marginLeft:"-100px",marginTop:"1px"}}>
                                <a href="#!" className="text-reset">Help</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p style={{marginLeft:"-90px",marginTop:"1px"}}>
                                <i className="fa fa-home me-3"></i> New York, NY 10012, US
                            </p>
                            <p style={{marginLeft:"-100px",marginTop:"1px"}}>
                                <i className="fa fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p style={{marginLeft:"-130px",marginTop:"1px"}}>
                                <i className="fa fa-phone me-3"></i> + 01 234 567 88
                            </p>
                            <p style={{marginLeft:"-130px",marginTop:"1px"}}>
                                <i className="fa fa-print me-3"></i> + 01 234 567 89
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>

    )
}