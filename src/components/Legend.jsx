export default function Legend({category}){



    return(
        <div className="legend">
                <div class="card">
                    <div class="card-body">
                        <h5>Legend</h5>
                        Category: {category.cause}
                    </div>
                </div>
            </div>
    )
}