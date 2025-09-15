// src/components/last-chance/LastChanceGrid.jsx
import React from "react";
import ChanceCard from "./ChanceCard";

const LastChanceGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-[1200px] mx-auto mt-4 lg:mt-24">
      {items.map((item) => (
        <ChanceCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default LastChanceGrid;
