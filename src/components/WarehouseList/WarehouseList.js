import "./WarehouseList.scss";

import WarehouseListItem from "./WarehouseListItem/WarehouseListItem";

import { useState, useEffect } from "react";

import axios from "axios";

const uniqid = require('uniqid');

export default function WarehouseList() {

    const [warehouseData, setWarehouseData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080")
            .then((response) => {
                console.log(response.data);
                setWarehouseData(response.data);
            })
    }, []);

    return (
        <>
            {warehouseData.map((warehouse) => (
                < WarehouseListItem key={uniqid()} warehouse={warehouse} />
            ))


            };
        </>

    )
}