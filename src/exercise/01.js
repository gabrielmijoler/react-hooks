// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting({initialname = '', ...props}) {
  // 💣 delete this variable declaration and replace it with a React.useState call
  
  const [name, setname] = React.useState(initialname)

  function handleChange(event) {
      setname(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" value={name} />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialname="Fulano"/>
}

export default App
