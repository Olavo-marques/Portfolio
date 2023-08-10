import * as S from "../pages/home/HomePage-Style.js"
import Projeto_Pokedex from "../assets/pokedex.png"

const ProjectPokedex = () => {
    return(
        <S.Div_Information_Projects>

        <S.H3_Title>Pokedéx</S.H3_Title>

        <a href="https://pokedex-alves1.surge.sh/" target="_blank" rel="noreferrer"><S.Img_Project src={Projeto_Pokedex} alt="Projeto Pokedex" /></a>

        <S.P_Description>
            O Projeto Pokédex foi desenvolvido como uma atividade dentro do curso Full-Stack Web Developer da Labenu, o qual consiste em
            requisições (via axios) para a PokéApi, que é uma API pública* com informações relacionadas aos Pokémons. Trata-se de uma ferramenta
            onde o usuário pode verificar os detalhes de todos os Pokémons, adicionar os mesmos a sua Pokédex e também criar batalhas entre Pokémons
            para ver qual é o vencedor.
        </S.P_Description>

        <S.P_Description><a href="https://github.com/Olavo-marques/Front-Pokedex" target="_blank" rel="noreferrer"> Projeto no Github</a></S.P_Description>

    </S.Div_Information_Projects>
    )
}
export default ProjectPokedex