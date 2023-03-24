import "./WarehouseListItem.scss";
import deleteIcon from "../../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../../assets/Icons/edit-24px.svg";
import chevronRightIcon from "../../../assets/Icons/chevron_right-24px.svg";
import WarehouseModal from "../../WarehouseModal/WarehouseModal";
import { useState } from "react";

export default function WarehouseListItem({ warehouse }) {
    const [show, setShow] = useState(false);

    const onClose = () => setShow(false)

    return (
        <div className="temp">
            <div className="wh-ls-item">
                <div className="wh-ls-item__container">
                    <div className="wh-ls-item__wh">
                        <h2 className="wh-ls-item__heading--style">WAREHOUSE</h2>
                        <button className="wh-ls-item__button">
                            <span className="wh-ls-item__button-span">
                                <p className="wh-ls-item__button-span-text">{warehouse.warehouse_name}</p>
                            </span>
                            <span className="wh-ls-item__button-span">
                                <img src={chevronRightIcon} className="wh-ls-item__button-span-image" alt="chevron-right-icon" />
                            </span>
                        </button>
                    </div>
                    <div className="wh-ls-item__address">
                        <h2 className="wh-ls-item__heading--style">ADDRESS</h2>
                        <p className="wh-ls-item__p--style">{warehouse.address}, {warehouse.city}, {warehouse.country}</p>
                    </div>
                </div>
                <div className="wh-ls-item__container">
                    <div className="wh-ls-item__contact">
                        <h2 className="wh-ls-item__heading--style">CONTACT NAME</h2>
                        <p className="wh-ls-item__p--style">{warehouse.contact_name}</p>
                    </div>
                    <div className="wh-ls-item__contact-info">
                        <h2 className="wh-ls-item__heading--style">CONTACT INFORMATION</h2>
                        <div>
                            <p className="wh-ls-item__p--style">{warehouse.contact_phone}</p>
                            <p className="wh-ls-item__p--style">{warehouse.contact_email}</p>
                        </div>
                    </div>
                </div>
                <div className="wh-ls-item__icons">
                    <button className="wh-ls-item__icons-delete" onClick={() => setShow(true)} ><img src={deleteIcon} alt="delete-icon" /></button>
                    <WarehouseModal onClose={onClose} show={show} warehouse={warehouse} id={warehouse.id}/>
                    <button className="wh-ls-item__icons-edit">
                        <img src={editIcon} alt="edit-icon" />
                    </button>
                </div>

            </div>
        </div>
    );
};