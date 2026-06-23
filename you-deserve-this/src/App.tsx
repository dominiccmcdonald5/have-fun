import { useState } from 'react'
import './App.css'

const BUTTON_COUNT = 15000

const LETTER_BUTTONS = new Map<number, string>([
  [413, 'C'],
  [1777, 'E'],
  [2988, 'E'],
  [5021, 'J'],
  [7402, 'R'],
  [9999, 'S'],
  [14987, 'T'],
])

const buttonNumbers = Array.from({ length: BUTTON_COUNT }, (_, index) => index + 1)

function App() {
  const [activeLetter, setActiveLetter] = useState<string | null>(null)

  return (
    <main className="page">
      <header className="headline">
        <h1>Y'all deserve this</h1>
        <p className="subtext">
          I am trying to chill on vacation and now I have to hide an idol...
          Because of that, enjoy!
        </p>
      </header>

      <section className="button-board" aria-label="Button board">
        {buttonNumbers.map((buttonNumber) => {
          const letter = LETTER_BUTTONS.get(buttonNumber)

          return (
            <button
              key={buttonNumber}
              type="button"
              className={`tile ${letter ? 'tile-secret' : ''}`}
              aria-label={`Button ${buttonNumber}`}
              onClick={() => setActiveLetter(letter ?? null)}
            >
              <span className="tile-label">{buttonNumber}</span>
            </button>
          )
        })}
      </section>

      {activeLetter ? (
        <div className="overlay" role="presentation" onClick={() => setActiveLetter(null)}>
          <div
            className="overlay-card"
            role="dialog"
            aria-modal="true"
            aria-label="Hidden letter widget"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="overlay-close"
              aria-label="Close hidden letter"
              onClick={() => setActiveLetter(null)}
            >
              ×
            </button>
            <span className="letter-widget letter-widget-large" aria-hidden="true">
              {activeLetter}
            </span>
          </div>
        </div>
      ) : null}
    </main>
  )
}

export default App
