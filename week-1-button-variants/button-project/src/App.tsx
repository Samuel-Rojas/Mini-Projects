import Variant from './Variants.tsx';
import './App.css'

function App() {

  return (
    <>
      <Variant />
      <Variant name="Click me" variant='primary' />
      <Variant size="lg" disabled />
    </>
  )
}

export default App
