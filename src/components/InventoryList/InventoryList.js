import "./InventoryList.scss"
import InventoryListCard from "../../components/InventoryListCard/InventoryListCard";
import sortDefaultIcon from "../../assets/Icons/sort-24px.svg";

function InventoryList ({ inventoryArray }) {

  return (
    <>
      <div className="inventory__category-selector--wider">
        <div className="inventory__toggle">
            <h2 className="inventory__selector">INVENTORY ITEM</h2>
            <img
            className="inventory__img-selector"
            src={sortDefaultIcon}
            alt="sort default icon"
            />
        </div>
        <div className="inventory__toggle">
            <h2 className="inventory__selector">CATEGORY</h2>
            <img
            className="inventory__img-selector"
            src={sortDefaultIcon}
            alt="sort default icon"
            />
        </div>
        <div className="inventory__toggle">
            <h2 className="inventory__selector">STATUS</h2>
            <img
            className="inventory__img-selector"
            src={sortDefaultIcon}
            alt="sort default icon"
            />
        </div>
        <div className="inventory__toggle">
            <h2 className="inventory__selector">QTY</h2>
            <img
            className="inventory__img-selector"
            src={sortDefaultIcon}
            alt="sort default icon"
            />
        </div>
        <div className="inventory__toggle">
            <h2 className="inventory__selector">WAREHOUSE</h2>
            <img
            className="inventory__img-selector"
            src={sortDefaultIcon}
            alt="sort default icon"
            />
        </div>
        <div className="inventory__toggle">
            <h2 className="inventory__selector">ACTIONS</h2>
            <img
            className="inventory__img-selector"
            src={sortDefaultIcon}
            alt="sort default icon"
            />
        </div>
    </div>
    <div className="inventory__permutation">
        <ul className="inventory__outcome">
        {inventoryArray.map((item) => {
            return <InventoryListCard key={item.id} id={item.id} name={item.item_name} warehouse={item.warehouse_id} category={item.category} status={item.status} quantity={item.quantity}/>
        })}
        </ul>
    </div>
    </>
  );
};

export default InventoryList;