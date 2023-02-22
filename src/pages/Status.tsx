import { PaperPlaneRight } from 'phosphor-react'
import { FormEvent, KeyboardEvent, useState } from 'react'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import './Status.css'

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswer] = useState([
    'concordo',
    'Muito massa',
    'Nossa que Daora',
  ])

  function handleCreateNewAnswer(event?: FormEvent) {
    event?.preventDefault()

    setAnswer((state) => [newAnswer, ...state])
    setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      handleCreateNewAnswer()
    }
  }

  return (
    <main className="Status">
      <Header />

      <Tweet
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate culpa quaerat hic, exercitationem placeat labore voluptatum, incidunt tempora fuga, magnam magni repellendus! Sed iure quia laboriosam modi ullam et vero!
"
      />

      <Separator />

      <form onSubmit={handleCreateNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/Anselmo-Dias.png"
            alt="Foto do usuário"
          />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
            onKeyDown={handleHotKeySubmit}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}
