import "./WarehouseModal.scss";
import closeIcon from "../../assets/Icons/close-24px.svg";

export default function WarehouseModal({ show, onClose }) {

    if (show === false) {
        return null
    }

    return (
        <div className="modal" onClick={() => onClose()}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <button className="modal__close" onClick={() => onClose()}><img src={closeIcon}/></button>
                <div className="modal__top-container">
                    <div className="modal__header">
                        <h1 className="modal__header-title">Delete Washigton warehouse?</h1>
                    </div>
                    <div className="modal__body">
                        <p className="modal__body-p">Please confirm that you'd like to delete the Washington from the list of warehouses. You won't be able to undo this action.</p>
                    </div>
                </div>
                <div className="modal__footer">
                    <button className="modal__cancel" onClick={() => onClose()}>Cancel</button>
                    <button className="modal__delete">Delete</button>
                </div>
            </div>
        </div >
    )
}