export default function InventoryItem({ id, title, imgUrl, copiesAvailable, setSelectedTitleById }) {
    return (
        <div className="inventoryItem">
            <h2>{title}</h2>
            <img src={imgUrl} />
            <p>Copies Available: {copiesAvailable.current}</p>
        </div>
    );
}
