import Card from './Card'

function App() {
  return (
    <div className="something">
      <Card 
        image="https://via.placeholder.com/150"
        imgAlt="Placeholder"
        name="Samuel Rojas"
        occupation = "aspiring software engineer"
        description = "I am a highschool senior trying to learn to code the basic to have fun with the littlle things in life."
      />
      <Card 
        image="https://via.placeholder.com/150"
        imgAlt="Placeholder"
        name="Luis Rojas"
        occupation = "Breakdancer"
        description = "Influencing the public."
      />
    </div>
  )
}

export default App
