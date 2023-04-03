import { useNavigate } from "react-router-dom";

export default function InventoryItem(props) {
    const navigate = useNavigate();

    return (
        <div className="inventory_item" onClick={() => navigate(`/film/${props.filmData.imdbID}`)}>
            <h3 className="item_title">{props.filmData.Title}</h3>
            <img src={props.filmData.Poster} />
        </div>
    );
}