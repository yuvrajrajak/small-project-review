import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import styled from 'styled-components'

const Review = () => {
  const [index, setIndex] = useState(0)
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
    setIndex(index => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  }

  const prevPerson = () => {
    setIndex(() => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  }

  const randomPerson =()=>{
    let randomNumber = Math.floor(Math.random() * people.length);
    if(randomNumber === index){
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <Wrapper>
      <artilce>
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="text">{text}</p>
        <div className="button-container">

          <button type="button" onClick={prevPerson}><FaChevronLeft /></button>
          <button type="button" onClick={nextPerson}><FaChevronRight /></button>

        </div>
        <button className="surprise-btn" onClick={randomPerson}>
          surprise me
        </button>
      </artilce>
    </Wrapper>
  );
};

const Wrapper = styled.section`
background: var(--clr-white);
padding: 1.5rem 2rem;
text-align: center;
border-radius: var(--radius);
transition: var(--transition);
box-shadow: var(--light-shadow);
margin-top: 4rem;
&:hover{
  box-shadow: var(--dark-shadow);
}
.img-container{
  position: relative;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  margin-bottom: 1.5rem;
}
.person-img{
 display: block;
 width: 100%;
 height: 100%;
 object-fit: cover;
 border-radius: 50%;
 position: relative;
}
.quote-icon{
  position: absolute;
  top: 0;
  left: 0;
  background: var(--clr-primary-5);
  width: 2.5rem;
  height: 2.5rem;
  display: grid;
  place-items: center;
  color: var(--clr-white);
  border-radius: 50%;
  transform: translateY(25%);
  
}
.img-container::before{
  content:'';
  width: 100%;
  height: 100%;
  background: var(--clr-primary-5);
  border-radius: 50%;
  position: absolute;
  top: -0.25rem;
  right: -0.5rem; 

}
.job{
  font-size: 0.875rem;
  text-transform: uppercase;
  color: var(--clr-primary-5);
}
.button-container{
  button{
    font-size: 1.2rem;
    padding: 0.5rem 0.25rem;
    margin: 0.2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-7);
    cursor: pointer;
    transition: var(--transition);
  }
  button:hover{
    color: var(--clr-primary-3);
  }
}
.surprise-btn{
  padding: 0.2rem 0.1rem;
  text-transform: capitalize;
  background: var(--clr-primary-10);
  border-color: transparent;
  border-radius: var(--radius);
  cursor: pointer;
  color: var(--clr-primary-5);
  transition: var(--transition);
  &:hover{
    background: var(--clr-primary-5);
    color: var(--clr-black);
  } 
}

`

export default Review;
