export default function DetailsPanel({ selectedTitle }) {
    const { id, title, imgUrl, copiesAvailable, rating, description } = selectedTitle;

    return (
        <div className="details_panel">
            <h2>Details</h2>
        </div>
    );
}
