const Card =(props)=> {

    return (
        <div className="col mb-4">
            <div className="card h-100">
                <img 
                    src={props.imgUrl} 
                    alt={props.location} 
                    className="img-fluid image card-img card-img-top" 
                />
                <div className="card-body">
                    <h2 className="card-title text-capitalize">{props.location}</h2>
                    <p className="card-text text-capitalize">When: {props.date} </p>
                    <p className="card-text text-capitalize">Occasion: {props.occasion}</p>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card