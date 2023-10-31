import { useState } from 'react'

export function App() {
  const [wordToGuess, setWordToGuess] = useState<string>('')

  return (
    <>
      <WordToGuess />
      <HangmanDiagram />
      <Guess />
    </>
  )
}

interface HangmanDiagramProps {}
function HangmanDiagram({}: HangmanDiagramProps) {
  return <div>Diagram</div>
}

interface WordToGuessProps {}
function WordToGuess({}: WordToGuessProps) {
  return <div>Word to Guess Input</div>
}

interface GuessProps {}
function Guess({}: GuessProps) {
  return <div>Guess Input</div>
}

export default App
