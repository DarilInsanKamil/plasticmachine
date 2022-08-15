import React, { useEffect } from "react";
import { useState } from "react";
import { CardItem, Gap, InputText, MenuBar } from "../../components";
import "./style.css";
export const ProductList = () => {
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:4001/v1/product/products")
      .then((res) => res.json())
      .then((res) => setDatas(res.data));
  }, [datas]);

  const searchData = datas.filter((a) => {
    return a.title.toLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <div className="productlist-container">
      <div className="productlist-header">
        <h3 className="productlist-title">Our Product</h3>
        <Gap height="20px" />
        <InputText
          placeholder="search.."
          onChange={(e) => setSearch(e.target.value)}
        />
        <Gap height="16px" />
        <MenuBar />
      </div>
      <div className="productlist-card">
        {datas.length > 0 ? <CardItem datas={searchData} /> : <p>Data tidak ada</p>}
      </div>
    </div>
  );
};
