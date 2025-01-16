import { useState } from 'react'
import { useNavigate } from 'react-router'
import './Home.css'

function Home() {
  //const [count, setCount] = useState(0)
  let navigate = useNavigate();

  return (
    <div>
      <h1>Homepage</h1>
      <button onClick = { () => {navigate("/TicTacToe")}}>
        TicTacToe
      </button>
    </div>
  )
}

export default Home
