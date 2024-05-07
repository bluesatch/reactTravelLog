const Card =(props)=> {

    return (
        <div className="col">
            <div className="card">
                <img src={props.imgUrl} alt={props.location} className="img-fluid image card-img card-img-top" />
                <div className="card-body">
                    <h2 className="display-4">{props.location}</h2>
                    <p className="card-text">When:{props.date} </p>
                    <p className="card-text">Occasion: {props.occasion}</p>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card