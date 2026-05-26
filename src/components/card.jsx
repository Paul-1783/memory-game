import "./../styles/card.css"


export function Card({imgSrc, imgName}){

    return(
        <>
            <button className="card">
                <img src={imgSrc} alt={name} />
            </button>
        </>
    )
}