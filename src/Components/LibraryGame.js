export default function LibraryGame() {
    return (
        <div className="gaming-library profile-library">
            <div className="col-lg-12">
                <div className="heading-section">
                    <h4><em>Your Gaming</em> Library</h4>
                </div>
                <div className="item">
                    <ul>
                        <li><img src={require("./assets/images/game-01.jpg" )} alt="" className="templatemo-item" /></li>
                        <li><h4>Dota 2</h4><span>Sandbox</span></li>
                        <li><h4>Date Added</h4><span>24/08/2036</span></li>
                        <li><h4>Hours Played</h4><span>634 H 22 Mins</span></li>
                        <li><h4>Currently</h4><span>Downloaded</span></li>
                        <li><div className="main-border-button border-no-active"><a href="#">Donwloaded</a></div></li>
                    </ul>
                </div>
                <div className="item">
                    <ul>
                        <li><img src={require("./assets/images/game-02.jpg" )} alt="" className="templatemo-item" /></li>
                        <li><h4>Fortnite</h4><span>Sandbox</span></li>
                        <li><h4>Date Added</h4><span>22/06/2036</span></li>
                        <li><h4>Hours Played</h4><span>745 H 22 Mins</span></li>
                        <li><h4>Currently</h4><span>Downloaded</span></li>
                        <li><div className="main-border-button border-no-active"><a href="#">Đã Mua</a></div></li>
                    </ul>
                </div>
                <div className="item last-item">
                    <ul>
                        <li><img src={require("./assets/images/game-03.jpg")} alt="" className="templatemo-item" /></li>
                        <li><h4>CS-GO</h4><span>Sandbox</span></li>
                        <li><h4>Date Added</h4><span>21/04/2022</span></li>
                        <li><h4>Hours Played</h4><span>632 H 46 Mins</span></li>
                        <li><h4>Currently</h4><span>Downloaded</span></li>
                        <li><div className="main-border-button border-no-active"><a href="#">Đã Mua</a></div></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}