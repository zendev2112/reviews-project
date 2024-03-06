import { useState } from 'react'
import people from './data'
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteRight,
} from 'react-icons/fa'

const App = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]
  
  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1
      return newIndex
    })
  }
  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1
      return newIndex
    })
  }
  

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>          
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className="btn-container">
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronCircleLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronCircleRight />
          </button>
        </div>
      </article>
    </main>
  )
}
export default App
