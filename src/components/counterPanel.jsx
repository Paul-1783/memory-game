export function CounterPanel({bestResult, countAttempts}){
    return (
        <>
        <div className="counter-panel">
            <p>best attempt: {bestResult}</p>
            <p>correctly guessed cards: {countAttempts}</p>
        </div>
        </>
    )
}