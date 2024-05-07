import Card from "./components/Card"
import data from "./data"

const App =()=> {

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
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3">
                    { cards }
                </div>
            </div>
        </>
    )
}

export default App