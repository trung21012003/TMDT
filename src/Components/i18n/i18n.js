
import i18n from "i18next";
import {initReactI18next, useTranslation} from "react-i18next";

const resources = {
    en: {
        translation: {
            home: "Home",
            features:"Featured",
            game:"Games",
            download:"Downloads",
            top:"Top",
            viewAllGame:"View All Games",
            howToStartYour:"How To Start Your",
            liveStream:"Live Stream",
            goToProfile:"Go To Profile",
            youAreLive:"You Are Live",
            mostPopular:"Most Popular",
            loadMoreStream:"Load More Streams",
            welcomeTo:"Welcome To T-Games",
            browser:"Browser",
            ourPopularGameHere:"OUR POPULAR GAMES HERE",
            rightNow: "Right Now",
            yourGamming:"Your Gaming",
            library:"Library",
            bought:"Boughted",
            streamer:"Streamers",
            follow: "Follow",
            chosseGame:"Choose your want game",
            allTypes:"All Types",
            details:" Detail",
            addToCart:"Add To Cart",
            previous: "Previous",
            next:"Next",
            goToCheckout:"Go to checkout",
            stream:"Stream",
            login:"Login",
            live:"Live",
            logout:"Logout",
            register:"Register",
            category: "CATEGORY",
            action:"ACTION",
            sport:"SPORT",
            survival:"SURVIVAL",
            adventure:"ADVENTURE",
            horrified:"HORRIFIED",
            simulation:"SIMULATION",
            racing:"RACING",
            fighting:"FIGHTING",
            prof: "Welcome to T-Games, the world's largest provider of licensed and free games.",
            stream1:"T-Games caters to your entertainment needs by accessing our premier Live Stream platform.",
            stream2:"On the other hand, you can also become a streamer, connect with the gaming community, and indulge your passion for the game of your choice.",
            room:"Room Stream",
            start:"Begin at:",
            price:"PRICE",
            valid:"Invalid email address",
            account:"Do not have an account ?",
            now:"now",
            bill:"Bill",
            checkout:"Go to checkout",
            totalPrice:"Total Price",
            CHECKOUT:"CHECKOUT",
            yourOrder:"YOUR ORDER",
            checkoutsuccess:"After a successful payment, you will receive a link for your game",
            product:"PRODUCTS",
            registernow:"Please register an account here",
            relax:"Relax Room",
            foot:"Get connected with us on social networks:",
            university: "Nong Lam University, Vietnam",
            foot1:" Providing the world's leading online gaming experience.",

        }
    },
    vi: {
        translation: {
            home: "Trang chủ",
            features:"Nổi bật",
            game:"Trò chơi",
            download:"tải về",
            top: "Lượt lớn",
            viewAllGame:"Xem tất cả trò chơi",
            howToStartYour:"Bắt đầu như nào để",
            liveStream:"Phát trực tiếp",
            goToProfile:"Trang cá nhân",
            youAreLive:"Bạn đang phát trực tiếp",
            mostPopular:"Phổ biến nhất",
            loadMoreStream:"Tải thêm lượt phát",
            welcomeTo:"Chào mừng tới T-Games",
            browser:"Khám phá",
            ourPopularGameHere:"MÔT SỐ GAME PHỔ BIẾN TẠI ĐÂY",
            rightNow: "Tại Đây",
            yourGamming:"Trò chơi của bạn",
            library:"Thư viện",
            bought:"Đã Mua",
            streamer:"Người phát trực tiếp",
            follow: "Theo dõi",
            chosseGame:"Chọn game bạn muốn",
            allTypes:"Tất cả loại trò chơi",
            details:" Chi tiết",
            addToCart:"Thêm vào giỏ hàng",
            previous: "Trước",
            next:"Tiếp",
            goToCheckout:"Tiến hành thanh toán",
            stream: "Phát Sóng",
            login:"Đăng Nhập",
            live:"Trực tiếp",
            logout:"Đăng Xuất",
            register:"Đăng Kí",
            category:"THỂ LOẠI",
            action:"HÀNH ĐỘNG",
            sport:"THỂ THAO",
            survival:"SINH TỒN",
            adventure:"PHIÊU LƯU",
            horrified:"KINH DỊ",
            simulation:"ĐƠN GIẢN",
            racing:"TỐC ĐỘ",
            fighting:"ĐỐI KHÁNG",
            prof: "Chào mừng bạn đến với T-Games, nơi cung cấp những tựa game bản quyền và game miễn phí lớn nhất thế giới.",
            stream1:"T-Games đáp ứng nhu cầu giải trí của bạn bằng cách truy cập nền tảng Live Stream hàng đầu của chúng tôi.",
            stream2:"Mặt khác bạn cũng có thể trở thành 1 streamer, kết nối cộng đồng game thủ, thỏa sức đam mê với tựa game bạn chọn.",
            room:"Phòng Stream",
            start:"Tạo lúc:",
            price:"Giá tiền",
            valid:"E-mail bạn cung cấp không hợp lệ",
            account:"Bạn chưa có tài khoản ?",
            now:"ngay",
            bill:"Hóa Đơn",
            checkout:"Thanh toán hóa đơn",
            totalPrice:"Tổng tiền",
            CHECKOUT:"THANH TOÁN",
            yourOrder:"ĐƠN CỦA BẠN",
            checkoutsuccess:"Sau Khi Thanh Toán Thành Công Bạn Sẽ Nhận Được Link Dành Cho Game Của Bạn",
            product:"SẢN PHẨM",
            registernow:"Vui lòng đăng kí tài khoản Tại Đây",
            relax:"Phòng Giải Trí",
            foot:"Hãy kết nối với chúng tôi trên các mạng xã hội:",
            university: "Đại Học Nông Lâm, Việt Nam",
            foot1:" Cung cấp trải nghiệm trờ chơi trực tuyến hàng đầu thế giới."


        }
    }
};
i18n.use(initReactI18next).init({
    resources,
    lng:'vi',
    fallbackLng:'vi',
    interpolation:{
        escapeValue:false
    }
})
