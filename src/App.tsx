import React, {useState} from 'react';
import './App.css';
import PromoLayout from "./components/PromoLayout/PromoLayout";
import Banner from "./components/Banner/Banner";

function App() {

    const [promoStatus, setPromoStatus] = useState<boolean>(true);

    return (
        <div className="app">
            <PromoLayout promoStatus={promoStatus}>
                <Banner
                    promoStatus={promoStatus}
                    setPromoStatus={setPromoStatus}
                />
            </PromoLayout>
        </div>
  );
}

export default App;
