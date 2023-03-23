import "./WarehouseList.scss";

import WarehouseListHeader from "./WarehouseListHeader/WarehouseListHeader";
import WarehouseSorter from "./WarehouseSorter/WarehouseSorter";
import WarehouseListItem from "./WarehouseListItem/WarehouseListItem";

import { useState, useEffect } from "react";

import axios from "axios";



const uniqid = require('uniqid');

export default function WarehouseList() {

    const [warehouseData, setWarehouseData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080")
            .then((response) => {
                setWarehouseData(response.data);
            })
    }, []);

    return (
        <>
            <WarehouseListHeader />
            <WarehouseSorter />
            {warehouseData.map((warehouse) => (
                < WarehouseListItem key={uniqid()} warehouse={warehouse} />
            ))


            };
        </>

    )
}