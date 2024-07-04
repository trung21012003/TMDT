import {Helmet} from "react-helmet";

export default function CheckoutCDN(){
    return (
        <div>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://cdn02.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?v=3.3.55067&themeRevisionID=65660e4b326633110492e01a"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn03.jotfor.ms/css/styles/payment/payment_styles.css?3.3.55067"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn01.jotfor.ms/css/styles/payment/payment_feature.css?3.3.55067"
                />
            </Helmet>
        </div>
    )
}