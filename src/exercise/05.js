// useRef and useEffect: DOM interaction
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
// eslint-disable-next-line no-unused-vars
import VanillaTilt from 'vanilla-tilt'

function Tilt({children}) {
  // 🐨 create a ref here with React.useRef()
// Useeffet() é executado sempre apos um componente ser atualizado na tela

  React.useEffect (() => {
  const tiltNode = tiltRef.current
  VanillaTilt.init(tiltNode,{
    max: 25,
    speed: 400,
    glare: true,
    'max-glare': 0.5,
  })
  return () => tiltNode.VanillaTilt.destroy()
},[])
  // VanillaTilt.init(tiltNode, {
  //   max: 25,
  //   speed: 400,
  //   glare: true,
  //   'max-glare': 0.5,
  // })
  //
  // 💰 Don't forget to return a cleanup function. VanillaTilt.init will add an
  // object to your DOM node to cleanup:
  // `return () => tiltNode.vanillaTilt.destroy()`
  //
  // 💰 Don't forget to specify your effect's dependencies array! In our case
  // we know that the tilt node will never change, so make it `[]`. Ask me about
  // this for a more in depth explanation.

  // 🐨 add the `ref` prop to the `tilt-root` div here:

  // refs possibilitam que elementos html sejam acessados pelo react e inclusive
  // repassados para outras bibliotecas
  const tiltRef = React.useRef()
  return (
    <div className="tilt-root" ref={tiltref}>
      <div className="tilt-child">{children}</div>
    </div>
  )
}

function App() {
  return (
    <Tilt>
      <div className="totally-centered">vanilla-tilt.js</div>
    </Tilt>
  )
}

export default App
