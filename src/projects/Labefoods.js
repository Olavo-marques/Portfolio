import * as S from "../pages/home/HomePage-Style.js"
import Projeto_Labefoods from "../assets/Labefoods.png"

const ProjectLabefoods = () => {
    return (
        <S.Div_Information_Projects>

            <S.H3_Title>Labefoods</S.H3_Title>

            <a href="https://labefoods-alves5.surge.sh/" target="_blank" rel="noreferrer"><S.Img_Project src={Projeto_Labefoods} alt="Projeto Labefoods" /></a>

            <S.P_Description>
                O Projeto LabeFoods foi desenvolvido como projeto final de Front End dentro do curso Full-Stack Web Developer da Labenu, o qual consiste em
                requisições (via axios) para a API labeFoods, que contém informações relacionadas ao desenvolvimento de uma aplicação que simula um aplicativo
                semelhante ao conhecido app iFood.
            </S.P_Description>

            <S.P_Description><a href="https://github.com/Olavo-marques/Front-Labfood" target="_blank" rel="noreferrer"> Projeto no Github</a></S.P_Description>

        </S.Div_Information_Projects>
    )
}
export default ProjectLabefoods