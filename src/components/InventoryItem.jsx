export default function InventoryItem({ title, imgUrl, copiesAvailable }) {
    return (
        <div className="inventoryItem">
            <h2>{title}</h2>
            <img src={imgUrl} />
            <p>Copies Available: {copiesAvailable.current}</p>
        </div>
    );
}
