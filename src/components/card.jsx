import "./../styles/card.css"


export function Card({imgSrc, imgName}){
    console.log("source ", imgSrc)

    return(
        <>
            <button className="card">
                <img src={imgSrc} alt={name} />
            </button>
        </>
    )
}