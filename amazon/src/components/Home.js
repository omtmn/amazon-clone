import React from 'react'
import "../css/Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img 
            className="home_logo" 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt="prime video" /> 
            <div className="home_row">
                <Product 
                id="1234321"
                title="Nintendo Swich (OLED model) White set"
                price={349.99}
                rating={5}
                image="https://assets.nintendo.com/image/upload/b_white,c_pad,f_auto,h_382,q_auto,w_573/ncom/en_US/switch/site-design-update/hardware/switch/nintendo-switch-oled-model-white-set/gallery/image01?v=2021070712"
                />
                 <Product 
                 id="1234231"
                 title="Fitbit Versa 2"
                 price={179.95}
                 rating={5}
                 image="https://www.fitbit.com/global/content/dam/fitbit/global/pdp/versa2/hero-static/black-carbon-aluminum/versa2-3qtr-black.png"
                />
            </div>
            <div className="home_row">
                <Product 
                id="1233321"
                title="KICHOT, 10-Speed Electric Food Mixer"
                price={99.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71J4GxnOc%2BS._AC_SL1500_.jpg"
                />
                 <Product 
                 id="1234221"
                 title="The Alchemist Kindle Edition"
                 price={11.99}
                 rating={5}
                 image="https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg"
                />
                <Product 
                 id="1234323"
                 title="Echo (2nd Generation) – Charcoal Fabric"
                 price={99.99}
                 rating={5}
                 image="https://images-na.ssl-images-amazon.com/images/I/51TFnR7AtGL._AC_SY400_.jpg"
                />
            </div>
            <div className="home_row">
                <Product 
                id="1231321"
                title="Blink Mini – Compact indoor plug-in smart security camera, 1080 HD video, night vision, motion detection, two-way audio, Works with Alexa – 1 camera"
                price={34.99}
                rating={4}
                image="http://cdn.shopify.com/s/files/1/0375/3816/8965/products/AMZ030101-main_1024x.jpg?v=1594397988"
                />
            </div>
        </div>
    )
}

export default Home
