// import { LayoutPage } from "../components";
// import { Routers } from "../config";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Card, LayoutPage } from '../components';
import DetailPage from './detailpage';
import './index.css'
function App() {
  return (
    <>
      {/* <LayoutPage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route path="list" element={<DetailPage />} >
              <Route path=":teamId" element={<Card />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
