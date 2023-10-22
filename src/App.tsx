import React from 'react';
import './App.css';
import PromoLayout from "./components/PromoLayout/PromoLayout";
import Banner from "./components/Banner/Banner";
import NumberScreen from "./components/NumberScreen/NumberScreen";
import PromoProvider from "./context/PromoContext";
import ControlsProvider from "./context/ControlsContext";

function App() {
    return (
        <PromoProvider>
            <ControlsProvider>
                <div className="app">
                    <PromoLayout>
                        <Banner />
                        <NumberScreen />
                    </PromoLayout>
                </div>
            </ControlsProvider>
        </PromoProvider>
  );
}

export default App;
