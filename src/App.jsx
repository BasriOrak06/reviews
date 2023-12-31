import { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      return checkNumber(newIndex);
      // if (newIndex > people.length - 1) {
      //   return 0;
      // }
      // return newIndex;
    });
  };
  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      return checkNumber(newIndex);
      // if (newIndex < 0) {
      //   return people.length - 1;
      // }
      // return newIndex;
    });
  };

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      return index + 1;
    }
    console.log(randomIndex);
    setIndex(checkNumber(randomIndex));
  };

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div>
          <button type='button' className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button type='button' className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button type='button' className='btn btn-hipster' onClick={randomPerson}>
          Surprise Me
        </button>
      </article>
    </main>
  );
};
export default App;
