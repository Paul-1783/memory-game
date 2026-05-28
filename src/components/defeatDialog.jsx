export function Defeat({bestResult, countAttempts}) {
    return (
        <div>
            <h1>Unfortunately you lost, train a little harder und you'll get there</h1>
            { countAttempts < bestResult ? `The current 'record' is ${bestResult} correct guesses.` 
            : <p>You achieved {countAttempts} correct guesses.</p> }
        </div>
    )
}