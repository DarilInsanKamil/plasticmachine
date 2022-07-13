import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayoutPage } from "../../components";
import DetailPage from "../../pages/detailpage";

export const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutPage />}>
                    <Route path="/list" element={<DetailPage />} >
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
