import { Card } from "../../moleculs";
import "./style.css";
import React from "react";

export const CardItem = ({ datas, onDetail, onContact }) => {
  return (
    <>
      {datas.map((val, i) => (
        <Card
          img={`http://localhost:4001/${val.image}`}
          title={val.title}
          key={i}
          value={val.id}
          onDetail={onDetail}
          onContact={onContact}
        />
      ))}
    </>
  );
};
