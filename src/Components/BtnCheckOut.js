import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export default function BtnCheckOut() {
    const user111 = useSelector((state) => state.auth.user);
    if(user111 != null) {
        return (
            <button type="submit" className="site-btn">ĐẶT HÀNG</button>
        )
    }else {
        return (
            <Link to="/signUp" >Vui Lòng Đăng Kí Tài Khoản Tài Đây</Link>
        )

    }

}