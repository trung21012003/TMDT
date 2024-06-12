import PopularGame from "./PopularGame";
import Header from "./Header";
export default function Home() {
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
                                            <h6>Welcome To Cyborg</h6>
                                            <h4><em>Browse</em> Our Popular Games Here</h4>
                                            <div className="main-button">
                                                <a href="browse.html">Browse Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <PopularGame/>

                    </div>
                </div>
            </div>

        </div>

    )
}