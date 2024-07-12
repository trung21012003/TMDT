
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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
            chossesGame:"Choose your want game",
            allTypes:"All Types",
            details:" Detail",
            addToCart:"Add To Cart",
            previous: "Previous",
            next:"Next",
            goToCheckout:"Go to checkout",
            stream:"Stream",
            login:"Login",
            live:"Live"
        }
    },
    vi: {
        translation: {
            home: "Trang chủ",
            features:"Nổi bật",
            game:"Trò chơi",
            download:"Tải về",
            top:"Cao",
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
            chossesGame:"Chọn game bạn muốn",
            allTypes:"Tất cả loại trò chơi",
            details:" Chi tiết",
            addToCart:"Thêm vào giỏ hàng",
            previous: "Trước",
            next:"Tiếp",
            goToCheckout:"Tiến hành thanh toán",
            stream: "Phát Sóng",
            login:"Đăng Nhập",
            live:"Trực tiếp"
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
