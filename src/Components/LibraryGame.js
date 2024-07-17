import {useTranslation} from "react-i18next";

export default function LibraryGame() {
    const {i18n} = useTranslation()
    const {t} =useTranslation();
    return (
        <div className="gaming-library profile-library">
            <div className="col-lg-12">
                <div className="heading-section">
                    <h4><em>{t("yourGamming")}</em> {t("library")}</h4>
                </div>
                <div className="item">
                    <ul>
                        <li><img style={{width:"80px", height :"80px"}} src={require("./assets/images/dota1.jpg" )} alt="" className="templatemo-item" /></li>
                        <li><h4>Dota 2</h4><span>Sandbox</span></li>
                        <li><h4>Date Added</h4><span>24/08/2023</span></li>
                        <li><h4>Hours Played</h4><span>634 H 22 Mins</span></li>
                        <li><h4>Currently</h4><span>Downloaded</span></li>
                        <li><div className="main-border-button border-no-active"><a href="#">{t("bought")}</a></div></li>
                    </ul>
                </div>
                <div className="item">
                    <ul>
                        <li><img style={{width:"80px", height :"80px"}} src={require("./assets/images/fc1.jpg" )} alt="" className="templatemo-item" /></li>
                        <li><h4>FC Online</h4><span>Sandbox</span></li>
                        <li><h4>Date Added</h4><span>22/06/2020</span></li>
                        <li><h4>Hours Played</h4><span>745 H 22 Mins</span></li>
                        <li><h4>Currently</h4><span>Downloaded</span></li>
                        <li><div className="main-border-button border-no-active"><a href="#">{t("bought")}</a></div></li>
                    </ul>
                </div>
                <div className="item last-item">
                    <ul>
                        <li><img style={{width:"80px", height :"80px"}} src={require("./assets/images/csgo2.png")} alt="" className="templatemo-item" /></li>
                        <li><h4>CS-GO</h4><span>Sandbox</span></li>
                        <li><h4>Date Added</h4><span>21/04/2022</span></li>
                        <li><h4>Hours Played</h4><span>632 H 46 Mins</span></li>
                        <li><h4>Currently</h4><span>Downloaded</span></li>
                        <li><div className="main-border-button border-no-active"><a href="#">{t("bought")}</a></div></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}