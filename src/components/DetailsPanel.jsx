export default function DetailsPanel({ selectedTitle, setSelectedTitleById }) {
    const { id, title, imgUrl, copiesAvailable, rating, description } = selectedTitle;

    return (
        <div className="details_panel">
            <h2>Details</h2>
            <button onClick={() => setSelectedTitleById(null)}>Hide Details</button>
        </div>
    );
}
