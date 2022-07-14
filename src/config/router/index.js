<<<<<<< Updated upstream
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LayoutPage } from '../../components'
import DetailPage from '../../pages/detailpage'
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LayoutPage, ListMachine } from "../../components";
import DetailPage from "../../pages/detailpage";
>>>>>>> Stashed changes

export const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LayoutPage />}>
                    <Route path="/" element={<LayoutPage />} />
                </Route>
                <Route path="list" element={<ListMachine />} />
                <Route path="detail-page" element={<DetailPage />} />
            </Routes>
        </Router>
    )
}
