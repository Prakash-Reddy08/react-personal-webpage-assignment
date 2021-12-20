import styled from "styled-components"
import { IoLocationSharp, IoMailSharp } from 'react-icons/io5'
// import { data } from '../tempData'
import { FaGraduationCap } from 'react-icons/fa'
import Share from "./Share";
const Card = ({ data }) => {
    console.log(data);
    const userExperience = data[0]?.user_experiences[2];
    const userQualifications = data[0]?.user_qualifications[0];
    return (
        <Wrapper>
            <div className="total">

                <div className="img">
                    <img src={`${data[0]?.user_image_url}`} alt="d" />
                </div>
                <div className="info">
                    <div className="name_location">
                        <h3 className="user_name">{data[0]?.jobseeker_name}</h3>
                        <div className="location">
                            <IoLocationSharp className="lo_icon" />
                            <p className="location_info">{data[0]?.area}, {data[0]?.city}</p>
                        </div>
                    </div>
                    <div className="experience">
                        <div className="head">
                            <IoMailSharp className="lo_icon" />
                            <h4>EXPERIENCE</h4>
                            <p className='exp'>{Math.floor(data[0]?.total_months_exp / 12) > 0 ? `${Math.floor(data[0]?.total_months_exp / 12)} yr Exp` : `${data[0].total_months_exp} mons Exp`}</p>
                        </div>
                        <div className="content">
                            <div className="company_logo">
                                <img className="compan_img" src={userExperience?.company_logo} alt="" />
                            </div>
                            <div className="company_info">
                                <h3>Fitter</h3>
                                <h4>{userExperience?.company_name.replace(` : ${userExperience?.company_location}`, "")}</h4>
                                <p className="duration">{userExperience?.company_starting_date} - {userExperience?.company_ending_date}</p>
                                <div className="desc">
                                    <p className="desc">
                                        {userExperience?.role_discription}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <FaGraduationCap className="lo_icon" />
                            <h4>Education</h4>
                        </div>
                        <div className="edu_desc">
                            <h4>{userQualifications?.course_type}&#8212;{userQualifications?.course_name}</h4>
                            <p className="duration">{userQualifications?.user_college.split(' :')[0]} | {userQualifications?.user_passing_year}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="share">
                <Share />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 58.8125rem;
    /* height: 31.625rem; */
    background-color: #FFFFFF;
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.24);
    .total{
        display: flex;
        flex-direction: row;
        /* overflow: hidden; */
    }
   img{
             width: 370px;
          height: 100%;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
    }
    .lo_icon{
        color: #14967B;
        padding-right: 4px;
    }
    .info{
        width: 100%;
        padding: 60px 60px 60px 35px;
        .name_location{
            display: flex;
            margin:0 0 45px 30px;
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
        display: flex;
        flex-direction: column;
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
        .head,.bottom{
            display: flex;
            margin-left: 30px;
        }

        .content{
            display: flex;
            margin-top:16px;
            margin-left: 0;
            .compan_img{
                border-radius: 0;
                width: 43px;
                height: 47px;
            }
            .company_info{
                line-height: 1.6;
                margin-left: 16px;
                h4,h3{
                    padding: 0;
                    color: #232323;
                }
                h3{
                    font-family: 'Roboto';
                    font-weight: 500;
                }
                h4{
                    font-family: 'Roboto';
                    font-weight: 500;
                    font-size: 17px;
                }
                .duration{
                    color: #818181;
                }
                .desc{
                    margin-top: 9px;
                    line-height: 1.8;
                    color: #232323;
                }
            }
        }
        .bottom{
            margin-top: 22px;
            
            .lo_icon{
                width: 21px;
                height: 19px;
            }
            h4{
                font-family: 'Roboto';
                font-weight: 500;
                font-size: 17px;
            }
        }
        .edu_desc{
            display: flex;
            margin-top: 16px;
            flex-direction: column;
            margin-left: 56px;
            line-height: 1.8;
            h4{
                padding: 0;
                color: #232323;
                font-weight: 500;
                font-size: 19px;
            }
        }
    }
    .share {
        position: absolute;
        background-color: aquamarine;
        margin: 53%;


    }
`

export default Card
