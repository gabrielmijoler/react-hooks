// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

function Name() {
    const [name, setname] = react.useState('')
    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input id="name" value={name} onChange={event => setname(e.target.value)} />
        </div>
    )
}

// 🐨 accept `animal` and `onAnimalChange` props to this component
function FavoriteAnimal({ animal, onAnimalchange }) {
    // 💣 delete this, it's now managed by the App
    //const [animal, setAnimal] = React.useState('')

    return (
        <div>
            <label htmlFor="animal">Favorite Animal: </label>
            <input
                id="animal"
                value={animal}
                onChange={onAnimalchange}
            />
        </div>
    )
}
function Display({ animal }) {
    return <div>{`Your favorite animal is: ${animal}!`}</div>
    // 🐨 uncomment this
    //function Display({name, animal}) {
    //return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
    //}

    // 💣 remove this component in favor of the new one
    //function Display({name}) {
    // return <div>{`Hey ${name}, you are great!`}</div>
    //}

    function App() {
        // 🐨 add a useState for the animal
        //const [name, setName] = React.useState('')
        const [animal, setAnimal] = react.useState('')
        return (
            <form>
                <Name />
                
                {/* 🐨 pass the animal and onAnimalChange prop here (similar to the Name component above) */}
                <FavoriteAnimal animal={animal} onAnimalchange={event => setanimal(event.target.value)} />
                {/* 🐨 pass the animal prop here */}
                <Display animal={animal} />
            </form>
        )
    }

    export default App
// name={name} onNameChange={event => setName(event.target.value)}