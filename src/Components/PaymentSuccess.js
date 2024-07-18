import "./assets/css/paymentsuccess.css"
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteAllCart} from "../Reducers/CartReducer";
export default function PaymentSuccess(){
    const user111 = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(deleteAllCart());
    }, []);
    return (
        <div className="container-son">
            <div className="success-icon">
                <svg
                    width="100"
                    height="100"
                    fill="currentColor"
                    className="bi bi-check-circle"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M15.854 4.146a.5.5 0 0 0-.708-.708L6.5 12.293 2.354 8.146a.5.5 0 1 0-.708.708l4.5 4.5a.5.5 0 0 0 .708 0l8-8z"
                    />
                    <path
                        d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm0-1A7 7 0 1 1 8 1a7 7 0 0 1 0 14z"
                    />
                </svg>
            </div>
            <h1>Thanh toán thành công!</h1>
            <p>
                Cảm ơn {user111.user.email} đã đặt hàng. Tất cả trò chơi của bạn đã sẽ được gửi về Email của bạn.

            </p>
            <Link to="/" className="active">
                <button>Trở về trang chủ</button>
            </Link>
        </div>
    )
}