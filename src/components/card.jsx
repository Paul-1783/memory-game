import "./../styles/card.css"


export function Card({ imgSrc, imgName, handleGuess }){
    // console.log("in card")

    return(
        <>
            <button className="card">
                <img src={imgSrc} alt={name} onClick={() => handleGuess()} />
            </button>
        </>
    )
}