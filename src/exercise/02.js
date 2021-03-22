// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') || initialName

  // usestate, quando recebe um valor estatico vai sempre inicializar
  //o componente em toda atualizacao do componente que houver
  // para evitar isso, em vez de passsar o valor estatico, passamos uma função
  // que sera chamada inicializara a variavel de estado apenas quando necessario
  //Isso chamado ed LAZY INITIALIZER (inicializador"preguicoso")

  const [name, setName] = React.useState(window.localStorage.getItem('name') || initialName )

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)


  React.useEffect(()=>{
      // atualizando o localstorage como efeito colateral da atualizacao
      //do componente que disparada pela atualização do estado
      window.localStorage.setItem('name', name)
  },[name]
  )

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    <div>localStorage:{window.localStorage.getitem('name')}</div> 
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
