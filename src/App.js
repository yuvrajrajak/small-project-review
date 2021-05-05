import React from 'react';
import Review from './Review';
import styled from 'styled-components'

function App() {
  return (
    <Wrapper>
      <section className="container">
        <h2>our reviews</h2>
        <div className="underline"></div>
        <Review />
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
margin-top: 13rem;
h2{
  text-align: center;
}
.container{
  margin: 0 auto;
  width: 80vw;
  max-width: var(--fixed-width);
}
`

export default App;
