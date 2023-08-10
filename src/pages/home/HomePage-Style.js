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
margin-right: 40px;
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
/* border-top: 1px solid #1E62AB; */
border-bottom: 1px solid #1E62AB;
`
export const Div_Hello = styled.div`
display:flex;
justify-content: center;
width: 80%;  
/* margin-top: 50px; */
/* margin-bottom: 50px; */
/* border-top: 1px solid #1E62AB; */
/* border-bottom: 1px solid #1E62AB; */
`
export const H2_Projects = styled.h2`
color: #1E62AB;
border-bottom: #1E62AB 1px solid;
font-family: "Source Sans Pro", sans-serif;
font-style: normal;
font-size: 28px;
font-weight: 28px;
&:hover {
    /* transform: scale(1.); */
    color: black;
  }
`
export const Div_Welcome = styled.div`
/* display:flex; */
/* justify-content: space-around; */
/* width: 40%;   */
/* margin-right: 80px; */
/* margin-bottom: 50px; */
/* border-top: 1px solid #1E62AB; */
/* border-bottom: 1px solid #1E62AB; */
`
export const H1_Presentation = styled.h1`
font-family: "Source Sans Pro", sans-serif;
font-style: normal;
/* font-size: 28px; */
/* font-weight: 28px; */
`
export const H3_Presentation = styled.h3`
font-family: "Source Sans Pro", sans-serif;
font-style: normal;
/* font-size: 28px; */
/* font-weight: 28px; */
`
export const Button_Text_About = styled.button`
color: #FEFEFC	; 
background-color: #1E62AB;
padding: 10px;
margin-top: 20px;
margin-bottom: 20px;
border-top-left-radius: 10px;
border-bottom-right-radius: 10px;
border: none;
font-size: 16px;
cursor: pointer;
&:hover {
    transform: scale(1.1);
    background-color: #092B5F;
  }
`
export const Img_Project = styled.img`
height: 50vh;
width: 50vw;  
border-radius: 10px;
cursor: pointer;
&:hover {
    transform: scale(1.01);
  }
`
export const H3_Title = styled.h3`
/* margin-left: 10px; */
margin-bottom: 30px;
color: #1E62AB;
border-bottom: #1E62AB 1px solid;
font-family: "Source Sans Pro", sans-serif;
font-style: normal;
font-size: 28px;
font-weight: 28px;
`
export const P_Description = styled.p`
/* height: 50vh; */
width: 50vw;  
margin-top: 30px;
/* padding-left: 10px; */
margin-bottom: 20px;
font-family: "Source Sans Pro", sans-serif;
font-style: normal;
font-size: 18px;
font-weight: 28px;
`
export const Div_Information_Projects = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;
flex-direction: column;
/* background-color: #23C1F6; */
margin-top: 20px;
border-radius: 10px;
/* border-bottom: 1px solid #1E62AB; */
`
export const Img_Icone_Linkedin = styled.img`
width: 20px;
height: 20px;
margin-right: 10px;
`
export const Img_Icone_Whatsapp = styled.img`
width: 20px;
height: 20px;
margin-right: 10px;
`
export const Img_Icone_Email = styled.img`
width: 20px;
height: 20px;
margin-right: 10px;
`
export const Container_Contact = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-top: 70px;
`
export const Div_Contact = styled.div`
display: flex;
flex-direction: row;
/* justify-content: center; */
align-items: center;
margin: 10px;
`
export const P_Contatc = styled.p`
/* margin-bottom: 10px; */
`