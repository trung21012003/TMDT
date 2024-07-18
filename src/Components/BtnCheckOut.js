import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function BtnCheckOut() {
    const user111 = useSelector((state) => state.auth.user);
    const {i18n} = useTranslation()
    const {t} =useTranslation();
    if(user111 != null) {
        return (
            <button type="submit" className="site-btn">{t("CHECKOUT")}</button>
        )
    }else {
        return (
            <Link to="/signUp"  style={{color:"black",fontWeight:"bold"}}>{t("registernow")}</Link>
        )

    }

}