import {Link, useLocation} from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import {useTranslation} from "react-i18next";
export default function Footer() {
    const {i18n} = useTranslation()
    const {t} =useTranslation();
    const location = useLocation();
    const currentPath = location.pathname;
    return (

        <footer className="text-center text-lg-start text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-1 border-bottom">
                <div className="me-5 d-none d-lg-block" style={{color:"white"}}>
                    <span>{t("foot")}</span>
                </div>
                <div>
                    <Link to="" className="me-4 text-reset">
                        <i className="fa fa-facebook" style={{color:"white",width:"20px"}}></i>
                    </Link>
                    <Link to="" className="me-4 text-reset">
                        <i className="fa fa-twitter" style={{color:"white",width:"20px"}}></i>
                    </Link>
                    <Link  to=""  className="me-4 text-reset">
                        <i className="fa fa-google" style={{color:"white",width:"20px"}}></i>
                    </Link>
                    <Link  to="" className="me-4 text-reset">
                        <i className="fa fa-instagram" style={{color:"white",width:"20px"}}></i>
                    </Link>
                    <Link to="" className="me-4 text-reset">
                        <i className="fa fa-linkedin" style={{color:"white",width:"20px"}} ></i>
                    </Link>
                    <Link to="" className="me-4 text-reset">
                        <i className="fa fa-github" style={{color:"white",width:"20px"}}></i>
                    </Link>
                </div>
            </section>
            <section className="">
                <div className="container text-center text-md-start mt-1">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fa fa-gem me-3"></i>T-Gaming
                            </h6>
                            <p>
                                {t("foot1")}
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contributors
                            </h6>
                            <p style={{marginLeft:"-100px",marginBottom:"1px",marginTop:"1px"}}>
                                <Link  className="text-reset">Phan The Thinh</Link>
                            </p>
                            <p style={{marginLeft:"-100px",marginBottom:"1px",marginTop:"1px"}}>
                                <Link  className="text-reset">Tran Quoc Trung</Link>
                            </p>
                            <p style={{marginLeft:"-100px",marginBottom:"1px",marginTop:"1px"}}>
                                <Link className="text-reset">Nguyen Tran Phuc Thanh</Link>
                            </p>
                            <p style={{marginLeft:"-100px",marginBottom:"1px",marginTop:"1px"}}>
                                <Link  className="text-reset">Lap trinh Front End</Link>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p style={{marginLeft:"-100px",marginBottom:"1px"}}>
                                <Link to="/" className={currentPath === '/' ? 'active' : ''}>{t("home")}</Link>
                            </p>
                            <p style={{marginLeft:"-100px",marginBottom:"1px",marginTop:"1px"}}>
                                <Link to="/browse" className={currentPath === '/browse' ? 'active' : ''}>{t("browser")}</Link>
                            </p>
                            <p style={{marginLeft:"-100px",marginBottom:"1px",marginTop:"1px"}}>
                                <Link to="/streams" className={currentPath === '/streams' ? 'active' : ''}>{t("stream")}</Link>
                            </p>
                            <p style={{marginLeft:"-100px",marginBottom:"1px",marginTop:"1px"}}>
                                <Link to="/games" className={currentPath === '/games' ? 'active' : ''}>{t("game")}</Link>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p style={{marginLeft:"-90px",marginBottom:"1px",marginTop:"1px"}}>
                                <i className="fa fa-home me-3"></i> {t("university")}
                            </p>
                            <p style={{marginLeft:"-100px",marginBottom:"1px",marginTop:"1px"}}>
                                <i className="fa fa-envelope me-3"></i>
                                t-gaming@gmail.com
                            </p>
                            <p style={{marginLeft:"-130px",marginBottom:"1px",marginTop:"1px"}}>
                                <i className="fa fa-phone me-3"></i> +84 843 281 139
                            </p>
                            <p style={{marginLeft:"-130px",marginBottom:"1px",marginTop:"1px"}}>
                                <i className="fa fa-print me-3"></i> 1900 6789
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>

    )
}