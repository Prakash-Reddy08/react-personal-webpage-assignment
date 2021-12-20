import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./components/Card";
import Loading from "./components/Loading";
import Nav from "./components/Nav";
import background from './images/Background.png'

function App() {

  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    await axios.post('https://api.meetworks.in/users/get_unique_jobseeker_profile', { jobseeker_id: "614b410c2c4b197356a37f18" })
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
        setIsLoading(false);
      }).catch(err => {
        setIsLoading(false);
        console.log(err);
      })
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <Wrapper>
      <div className="page">

        <div className="nav">
          <Nav />
        </div>
        <div className="body">
          <Card data={userData} />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${background});
  .page{
    overflow-y: scroll;
    height: 100%;
  }
  .body{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default App;
