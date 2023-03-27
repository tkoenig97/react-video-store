import InventoryItem from './InventoryItem';

export default function InventoryContainer({ inventory }) {
    return (
        <div className="inventory-container">
            <h2>Inventory</h2>
            <div className="inventory-list">
                {inventory.map((props) => (
                    <InventoryItem {...props} />
                ))}
            </div>
        </div>
    );
}
