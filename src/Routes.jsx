import React, {useEffect} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import i18n from './i18n';
import Home from "./Components/HomePage/Home";

const AppRoutes = () => {
      
    return (
        <BrowserRouter>
            <main role="main">
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default AppRoutes;
