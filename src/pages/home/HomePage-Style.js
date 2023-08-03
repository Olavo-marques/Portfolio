import styled from 'styled-components'

export const Body_style = styled.body`
/* background-color: ;   */
display:flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const Img_Profile_Container = styled.img`
/* display:flex; */
/* justify-content: space-around; */
width: 10%;  
/* height: ;   */
/* margin-top: 50px; */
/* margin-bottom: 50px; */
/* border-top: 1px solid #1E62AB; */
/* border-bottom: 1px solid #1E62AB; */
border-radius: 10%;
`
export const Header_About = styled.header`
display:flex;
justify-content: space-around;
width: 40%;  
margin-top: 50px;
margin-bottom: 50px;
border-top: 1px solid #1E62AB;
border-bottom: 1px solid #1E62AB;
`
export const Button_Text_About = styled.button`
color: #FEFEFC	; 
background-color: #1E62AB;
padding: 10px;
margin-top: 20px;
margin-bottom: 20px;
border-radius: 30px;
border: none;
font-size: 16px;
cursor: pointer;
&:hover {
    transform: scale(1.2);
    background-color: #092B5F;
  }
`
export const Img_Project = styled.img`
height: 50vh;
width: 50vw;  
border-radius: 10px;
`
export const P_Description = styled.p`
/* height: 50vh; */
width: 50vw;  
margin-top: 20px;
margin-bottom: 50px;
/* border-radius: 10px; */
`
export const Div_Information_Projects = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;
/* align-items: center; */
`