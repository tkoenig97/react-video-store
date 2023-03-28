export default function InventoryItem({
    id,
    title,
    imgUrl,
    copiesAvailable,
    setSelectedTitleById,
}) {
    return (
        <div className="inventoryItem">
            <h2>{title}</h2>
            <img
                src={imgUrl}
                onClick={(event) => {
                    event.stopPropagation();
                    setSelectedTitleById(id);
                }}
            />
            <p>Copies Available: {copiesAvailable.current}</p>
        </div>
    );
}
