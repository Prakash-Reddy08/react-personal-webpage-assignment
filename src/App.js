import styled from "styled-components";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Share from "./components/Share";
import background from './images/Background.png'

function App() {
  return (
    <Wrapper>
      <div className="page">

        <div className="nav">
          <Nav />
        </div>
        <div className="body">
          <Card />
          <Share />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-image: url(${background});
  .page{
    height: 100vh;
  }
  .body{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
  }
`

export default App;
