import React from "react";
import { useState } from "react";
import { CardItem, Gap, InputText, MenuBar} from "../../components";
import { getInitialData } from "../../utils/data";
import "./style.css";
export const ProductList = () => {
  const [search, setSearch] = useState('')
  let data = getInitialData();
  const searchData = data.filter((a) => {
    return a.title.toLowerCase().includes(search.toLocaleLowerCase());
});

  return (
    <div className="productlist-container">
      <div className="productlist-header">
        <h3 className="productlist-title">Our Product</h3>
        <Gap height="20px"/>
        <InputText placeholder="search.." onChange={(e) => setSearch(e.target.value)}/>
        <Gap height="16px"/>
        <MenuBar />
      </div>
      <div className="productlist-card">
        <CardItem datas={searchData} />
      </div>
    </div>
  );
};
