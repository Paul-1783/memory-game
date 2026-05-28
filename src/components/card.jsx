import "./../styles/card.css"


export function Card({ imgSrc, imgName, handleGuess, index }){
    // console.log("in card")

    return(
        <>
            <button className="card">
                <img src={imgSrc} alt={name} onClick={(e) => handleGuess(e)} data-index={index} />
            </button>
        </>
    )
}