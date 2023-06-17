export default function Legend({ category }) {
  return (
    <div className="legend">
      <div className="card">
        <div className="card-body">
          <h5>Legend</h5>
          Category: {category.cause}
        </div>
      </div>
    </div>
  );
}
