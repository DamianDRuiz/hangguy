import { FormEvent, SetStateAction, useState } from 'react'

export function App() {
  const [wordToGuess, setWordToGuess] = useState<string>('')
  const [guesses, setGuesses] = useState<string[]>([])

  return (
    <>
      <WordToGuess setWordToGuess={setWordToGuess} />
      <HangmanDiagram guesses={guesses} />
      <Guess
        guesses={guesses}
        setGuesses={setGuesses}
        wordToGuess={wordToGuess}
      />
    </>
  )
}

interface HangmanDiagramProps {
  guesses: string[]
}
function HangmanDiagram({ guesses }: HangmanDiagramProps) {
  const guessesString = guesses.join(' ')
  return (
    <div>
      <p>Diagram</p>
      <p>{guessesString}</p>
    </div>
  )
}

interface WordToGuessProps {
  setWordToGuess: React.Dispatch<SetStateAction<string>>
}
function WordToGuess({ setWordToGuess }: WordToGuessProps) {
  const [inputValue, setInputValue] = useState<string>('')

  const handleInputValueChange = (e: React.FormEvent<HTMLInputElement>) =>
    setInputValue((e.target as HTMLInputElement).value)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (inputValue.length < 0 || inputValue.length > 15) return false
    setWordToGuess(inputValue)
    setInputValue('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputValueChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

interface GuessProps {
  wordToGuess: string
  guesses: string[]
  setGuesses: React.Dispatch<SetStateAction<string[]>>
}
function Guess({ wordToGuess, guesses, setGuesses }: GuessProps) {
  const [inputValue, setInputValue] = useState<string>('')

  const handleInputValueChange = (e: React.FormEvent<HTMLInputElement>) =>
    setInputValue((e.target as HTMLInputElement).value)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (guesses.includes(inputValue)) return false
    setGuesses([...guesses, inputValue])
    setInputValue('')
  }

  return (
    <div>
      <p>Guess Input ({wordToGuess})</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          maxLength={1}
          onChange={handleInputValueChange}
        />
      </form>
    </div>
  )
}

function isLetter(value: string) {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lettersArray = letters.split('')
  return lettersArray.includes(value)
}

export default App
