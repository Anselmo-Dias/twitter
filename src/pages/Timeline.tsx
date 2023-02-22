import { FormEvent, KeyboardEvent, useState } from 'react'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import './Timeline.css'

export function Timeline() {
  const [newTweets, setNewTweets] = useState('')
  const [tweets, setTweets] = useState([
    'Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram: ✅ npm start: De 32s para 400ms sim, demorava 30s✅ npm build: De 120s para 22sAlém disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥',
    'Estamos vivendo um momento interessante no mercado de startups. ',
    'Se você quer se destacar no universo da programação web, é importante manter-se atualizado com as últimas tendências e tecnologias. ',
  ])

  function handleCreateNewTweet(event?: FormEvent) {
    event?.preventDefault()

    setTweets((state) => [newTweets, ...state])
    setNewTweets('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      handleCreateNewTweet()
    }
  }
  return (
    <main className="timeline">
      <Header />

      <form onSubmit={handleCreateNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/Anselmo-Dias.png"
            alt="Foto do usuário"
          />
          <textarea
            id="tweet"
            placeholder="What's happening"
            value={newTweets}
            onChange={(event) => {
              setNewTweets(event.target.value)
            }}
            onKeyDown={handleHotKeySubmit}
          />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />
      })}
    </main>
  )
}
