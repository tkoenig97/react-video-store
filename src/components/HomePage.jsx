import { useState } from 'react';
import DetailsPanel from './DetailsPanel';
import InventoryItem from './InventoryItem';

export default function InventoryContainer({ inventory }) {
    const [selectedTitle, setSelectedTitle] = useState(null);

    const setSelectedTitleById = (id) => {
        const match = inventory.find((item) => item.id === id);

        if (match) {
            setSelectedTitle(match);
        } else {
            setSelectedTitle(null);
        }
    };

    return (
        <>
            <div className="inventory-container">
                <h2>Inventory</h2>
                <div className="inventory-list">
                    {inventory.map((props) => (
                        <InventoryItem 
                            setSelectedTitleById = {setSelectedTitleById}
                            {...props} />
                    ))}
                </div>
            </div>
            {/* will only render if there is a selectedFilm (not null) */}
            {selectedTitle && (
                <DetailsPanel 
                    selectedTitle={selectedTitle}/>
            )}
        </>
    );
}
