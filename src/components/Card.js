import styled from "styled-components"
import { data } from "../tempData";
import { IoLocationSharp, IoMailSharp } from 'react-icons/io5'
const Card = () => {
    console.log(data[0].user_image_url);
    return (
        <Wrapper>
            <div className="img">
                <img src={`${data[0].user_image_url}`} alt="d" />
            </div>
            <div className="info">
                <div className="name_location">
                    <h3 className="user_name">{data[0].jobseeker_name}</h3>
                    <div className="location">
                        <IoLocationSharp className="lo_icon" />
                        <p className="location_info">{data[0].area}, {data[0].city}</p>
                    </div>
                </div>
                <div className="experience">
                    <IoMailSharp className="lo_icon" />
                    <h4>EXPERIENCE</h4>
                    <p className='exp'>{Math.floor(data[0].total_months_exp / 12) > 0 ? `${Math.floor(data[0].total_months_exp / 12)} yr Exp` : `${data[0].total_months_exp} mons Exp`}</p>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 58.8125rem;
    height: 31.625rem;
    background-color: #FFFFFF;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.24);
    img{ 
          width: 370px;
          height: 100%;
    }
    .lo_icon{
        color: #14967B;
        padding-right: 4px;
    }
    .info{
        padding: 70px 35px;
        .name_location,.experience{
            display: flex;
            align-items:center;
            margin:0 0 45px 66px;
        }
        .user_name{
            font-family: 'Roboto';
            font-weight: 500;
            font-size: 17px;
            padding-right: 10px;
            border-right: 1px solid black;
            color: #232323;
        }
    }
    .location{
        display: flex;
        align-items: center;
        padding-left: 10px;
    }
    .experience{
        h4{
            color:#5BC2A8;
            padding-left:4px;
        }
        .exp{
            font-size:12px;
            margin-left: 9px;
            background-color:#5BC2A8;
            color:#FFFFFF;
            padding:3px 7px;
            border-radius:5px;
        }
    }
`

export default Card
