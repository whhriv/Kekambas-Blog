import Instructors from "./components/Instructors"
import Navbar from "./components/Navbar"

export default function App() {
  const instructors = {
    senior: 'Brian',
    associate: "Sarah"
  }

  return ( 
    <>
      <Navbar />
      <h1>Kekambas Blog</h1>
      <Instructors associate={ instructors.associate } senior={instructors.senior} />
    </>
  )
}
