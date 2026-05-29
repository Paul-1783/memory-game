export function Defeat({bestResult, countAttempts}) {
    return (
        <div>
            <h1>Unfortunately you lost. Train a little more und you'll get there.</h1>
            { countAttempts < bestResult ? `The current 'record' is ${bestResult} correct guesses.` 
            : <p>You guessed {countAttempts} time correctly.</p> }
        </div>
    )
}