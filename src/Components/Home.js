import PopularGame from "./PopularGame";
import Header from "./Header";
import Footer from "./Footer";
import LibraryGame from "./LibraryGame";
import {useTranslation} from "react-i18next";
export default function Home() {
    const {i18n} = useTranslation()
    const {t} =useTranslation();
    return (
        <div className="container">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-content">
                            <div className="main-banner">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="header-text">
                                            <h6>{t("welcomeTo")}</h6>
                                            <h4><em>{t("browser")}</em> {t("ourPopularGameHere")}</h4>
                                            <div className="main-button">
                                                <a href="browse">{t("browser")}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="most-popular">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="heading-section">
                                            <h4><em>{t("mostPopular")}</em> {t("rightNow")}</h4>
                                        </div>
                                        <PopularGame/>
                                    </div>
                                </div>
                            </div>
                            <LibraryGame/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}