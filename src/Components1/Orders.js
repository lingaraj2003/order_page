import React, { Component } from "react";
import OrderTable from "./OrderTable";
import "./Orders.css";
import shop from "./shop.png";
import rectangle from "./rectangle.png";

const Orders = () => {
  const currentData = [
    {
      Squre: <img src={rectangle} alt="" />,
      channel: <img src={shop} alt="" />,
      trackingNumber: "#TKN20203754",
      orderDate: "2022-05-04",
      city: "Lucknow",
      customerName: "Abhishek Dixit",
      orderValue: "4.66",
      status: "Pending",
    },
    {
      channel: <img src={shop} alt="" />,
      trackingNumber: "#TKN20203754",
      orderDate: "2022-05-04",
      city: "Lucknow",
      customerName: "Abhishek Dixit",
      orderValue: "5.55",
      status: "Pending",
    },
    {
      channel: <img src={shop} alt="" />,
      trackingNumber: "#TKN20203754",
      orderDate: "2022-05-04",
      city: "Lucknow",
      customerName: "Abhishek Dixit",
      orderValue: "10.4",
      status: "Pending",
    },
  ];
  return (
    <div>
      <> Orders</>
      <div className="hhh">
        <OrderTable currentData={currentData} />
      </div>
    </div>
  );
};
export default Orders;
