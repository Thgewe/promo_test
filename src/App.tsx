import React from 'react';
import './App.css';
import PromoLayout from "./components/PromoLayout/PromoLayout";
import Banner from "./components/Banner/Banner";
import NumberScreen from "./components/NumberScreen/NumberScreen";
import PromoProvider from "./context/PromoContext";

function App() {
    return (
        <PromoProvider>
            <div className="app">
                <PromoLayout>
                    <Banner />
                    <NumberScreen />
                </PromoLayout>
            </div>
        </PromoProvider>
  );
}

export default App;
