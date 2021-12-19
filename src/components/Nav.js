import styled from "styled-components"
import Logo from '../images/Logo.png'
import Discovery from '../images/discovery.png'
import Invite from '../images/invite.png'
import support from '../images/support.png'

const Nav = () => {
    return (
        <Wrapper>
            <div className="logo">
                <img src={Logo} alt="meeth" />
            </div>
            <div className="mid">
                <ul>
                    <li className="selected">
                        <div>
                            <img src={Discovery} alt="discovery" />
                            <p className="selected_p">Discovery</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={Invite} alt="discovery" />
                            <p>Invited</p>
                        </div>

                    </li>
                    <li>
                        <div >

                            <img src={support} alt="discovery" />
                            <p>Support</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="right">
                <div className="btns">
                    <button className="postbtn">Post Job</button>
                    <button className="signIn">Sign In</button>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 72px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.17);
    li{
        list-style-type: none;
    }

    .mid{
        height: 100%;
        display: flex;
        width: 20rem;
        ul{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
           
            li{
                height: 100%;
                display: flex;
                align-items: center;
                div{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    img{
                        height: 20px;
                    }
                }
            }
        }
    }
    p{
        margin-top: 3px;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #AFAFAF;

    }
    .right{
        .btns{
            button{
                font-weight: 500;
                padding: 0.5rem 0.6rem;
                border-radius: 6px;
                border: none;
                font-size: 16px;
            }
            .postbtn{
              margin-right: 25px;
              background-color: white;
              color: #14967B;
              border: 1px solid gray;
          }
        .signIn{
              background-color: #14967B;
              color: white;
          }
        }
    }
    .selected{
        border-bottom: 3px solid #5BC2A8;
        p{
            color: #14967B;
        }
    }
`

export default Nav
