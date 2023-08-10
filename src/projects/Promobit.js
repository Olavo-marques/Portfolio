import * as S from "../pages/home/HomePage-Style.js"
import Projeto_Case_Promobit from "../assets/promobit.png"

const ProjectPromobit = () => {
    return(
        <S.Div_Information_Projects>

        <S.H3_Title>Case Promobit</S.H3_Title>

        <a href="http://filmes-populares.surge.sh/" target="_blank" rel="noreferrer"><S.Img_Project src={Projeto_Case_Promobit} alt="Projeto Promobit" /></a>

        <S.P_Description>
            Esse projeto foi criado como case da promobit ultilisando a API da themoviebd no final do bootcamp que participei por 6 meses, ele
            e um site onde se encontra os recentes e populares filmes.
        </S.P_Description>

        <S.P_Description><a href="https://github.com/Olavo-marques/Case-Promobit-Themoviebd" target="_blank" rel="noreferrer"> Projeto no Github</a></S.P_Description>

    </S.Div_Information_Projects>
    )
}
export default ProjectPromobit