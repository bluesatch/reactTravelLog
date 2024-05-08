import Card from "./Card";
import data from "../data";

const Main =()=> {

    const cards = data.map(card => {
        return <Card 
                    key={card.id}
                    occasion={card.occasion}
                    location={card.location}
                    imgUrl={card.imgUrl}
                    description={card.description}
                    date={card.date}
                />
    })

    return (
        <main className="main" id="main">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    { cards }
                </div>
            </div>
        </main>
    )

}

export default Main 