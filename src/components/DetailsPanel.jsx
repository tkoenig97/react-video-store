export default function DetailsPanel({ selectedTitle, setSelectedTitleById }) {
    const { id, title, imgUrl, copiesAvailable, rating, description } = selectedTitle;

    return (
        <div className="details_panel">
            <h2>Details</h2>
            <div className="basic_container_column">
                <h3>{title}</h3>
                <div className="basic_container_row align_center">
                    <img src={imgUrl} />
                    <p>{description}</p>
                    <pre style={{ fontSize: "40px" }}>{rating}</pre>
                </div>
                <div className="basic_container_column">
                    {copiesAvailable.current} / {copiesAvailable.total} available
                    <div className="basic_container_row">
                        <button
                            disabled={copiesAvailable.current === 0}
                            onClick={() => checkoutOrReturnFilmById(id, "checkout")}
                        >Check out</button>
                        <button
                            disabled={copiesAvailable.current === copiesAvailable.total}
                            onClick={() => checkoutOrReturnFilmById(id, "return")}
                        >Return</button>
                        <button onClick={() => setSelectedTitleById(null)}>Hide Details</button>
                    </div>
                </div>

            </div>
        </div>
    );
}
