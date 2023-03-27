export default function InventoryItem({ title, imgUrl, copiesAvailable }) {
    return (
        <>
            <div className="inventoryItem">
                <h2>{title}</h2>
                <img src={imgUrl} />
                <p>Copies Available: {copiesAvailable}</p>
                <button
                    disabled={copiesAvailable === 0}
                    onClick={() => alert(`You checked out ${title}`)}
                >
                    Check Out
                </button>
            </div>
        </>
    );
}
