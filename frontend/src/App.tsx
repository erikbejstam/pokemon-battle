import { useEffect, useState } from 'react'
import './App.css'

const BASE_API_URL = 'http://localhost:3000/pokemon'

type Pokemon = {
  id: number
  name: string
}

function App() {
  const [team1, setTeam1] = useState('')
  const [team2, setTeam2] = useState('')
  const [log, setLog] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([])

  useEffect(() => {
    fetchAllPokemon()
  }, [])

  const fetchAllPokemon = async () => {
    try {
      const response = await fetch(`${BASE_API_URL}/`)

      if (!response.ok) throw new Error('Failed to get the list of Pokemon from database')

      const data = await response.json()
      setAllPokemon(data)

    } catch (err) {
      setError((err as Error).message)
    }
  }

  const handleBattle = async () => {
    setError(null)
    setLog(null)

    try {
      const team1Ids = team1.split(',').map(x => Number(x.trim()))
      const team2Ids = team2.split(',').map(x => Number(x.trim()))

      const response = await fetch(`${BASE_API_URL}/battle`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ team1Ids: team1Ids, team2Ids: team2Ids })
      })

      if (!response.ok){
        const data = await response.json();
        throw new Error(data.error || 'Request for battle failed...')
      } 

      const data = await response.json()
      setLog(JSON.stringify(data, null, 2))

    } catch (err) {
      setError((err as Error).message)
    }
  }

  return (
    <div>
      <h1>Pokemon Battle</h1>

      <div>Enter the IDs of the pokemon you want in the teams, comma-separated</div>

      <div>
        <textarea
          placeholder="1, 4, 13"
          value={team1}
          onChange={e => setTeam1(e.target.value)}
        />

        <textarea
          placeholder="4, 12, 100"
          value={team2}
          onChange={e => setTeam2(e.target.value)}
        />

      </div>

      <button onClick={handleBattle}>
        Simulate battle
      </button>

      {error && <p>{error}</p>}

      {log && (
        <>
          <h2>Battle log</h2>
          <pre>{log}</pre>
        </>
      )}

      <h2>Pokemon to choose from</h2>
      <ul style={{ columns: 3 }}>
        {allPokemon.map(p => (
          <li key={p.id}>{p.id}: {p.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
