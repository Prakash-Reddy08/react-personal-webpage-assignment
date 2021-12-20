import { BsFillShareFill } from 'react-icons/bs'
import styled from 'styled-components'
const Share = () => {
    return (
        <Wrapper>
            <BsFillShareFill className='share_icon' />
            <div>
                Share
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
border: 1px solid #14967B;
width: 100px;
height: 40px;
display: flex;
justify-content: space-evenly;
align-items: center;
border-radius: 5px;
font-weight: 500;
color: #14967B;
background-color: #FFFFFF;
`

export default Share
