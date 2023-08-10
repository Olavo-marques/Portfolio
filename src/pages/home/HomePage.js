import { goToMyExperinces, goTomyHistory } from '../../routes/Cordenator'
import IconeLinkedin from '../../assets/icone_linkedin.png'
import Projeto_Case_Promobit from '../../assets/promobit.png'
import Projeto_Labefoods from '../../assets/Labefoods.png'
import Img_Profile from '../../assets/photo_perfil.jpg'
import Projeto_Pokedex from '../../assets/pokedex.png'
import Icone_Whatsapp from '../../assets/whatsapp.png'
import Icone_Email from '../../assets/o-email.png'
import { useNavigate } from 'react-router-dom';
import * as S from "./HomePage-Style"

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <S.Body_style vide>

            <S.Header_About>
                <S.Button_Text_About onClick={() => goTomyHistory(navigate)}>Minha Historia</S.Button_Text_About>
                <S.Button_Text_About onClick={() => goToMyExperinces(navigate)}>Minhas Experiências</S.Button_Text_About>
            </S.Header_About>

            <S.Div_Hello>

                <S.Img_Profile_Container src={Img_Profile} />

                <S.Div_Welcome>
                    <S.H1_Presentation>Olá, eu sou o Olavo desenvolvedor web, amante de  <br />
                        games e apaixonado por tecnologia.</S.H1_Presentation>
                    <S.H3_Presentation>Fica a vontade para explorar tudo por aqui 🔎, só <br />
                        para lembrar, fico muito feliz com a sua visita aqui.😊</S.H3_Presentation>
                </S.Div_Welcome>

            </S.Div_Hello>

            <S.H2_Projects>Projetos</S.H2_Projects>

            <div>

                <S.Div_Information_Projects>

                    <S.H3_Title>Case Promobit</S.H3_Title>

                    <a href="http://filmes-populares.surge.sh/" target="_blank" rel="noreferrer"><S.Img_Project src={Projeto_Case_Promobit} alt="Projeto Promobit" /></a>

                    <S.P_Description>
                        Esse projeto foi criado como case da promobit ultilisando a API da themoviebd no final do bootcamp que participei por 6 meses, ele
                        e um site onde se encontra os recentes e populares filmes.
                    </S.P_Description>

                    <S.P_Description><a href="https://github.com/Olavo-marques/Case-Promobit-Themoviebd" target="_blank" rel="noreferrer"> Projeto no Github</a></S.P_Description>

                </S.Div_Information_Projects>

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
            </div>

            <footer>
                <a href="https://www.linkedin.com/in/olavo-marques-6421ab123/" target="_blank" rel="noreferrer"><S.Img_Icone_Linkedin src={IconeLinkedin} alt="Icone Linkedin" /></a>

                <S.Div_Contact>

                    <S.Img_Icone_Whatsapp src={Icone_Whatsapp} alt="Icone Whatsapp" />

                    <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer"><S.P_Contatc>11948032907</S.P_Contatc></a>

                </S.Div_Contact>

                <S.Div_Contact>

                    <S.Img_Icone_Email src={Icone_Email} alt="Icone Email" />

                    <a href="https://www.google.com/intl/pt-BR/gmail/about/" target="_blank" rel="noreferrer"><S.P_Contatc><S.P_Contatc>omarquesdonascimento@gmail.com</S.P_Contatc></S.P_Contatc></a>

                </S.Div_Contact>
                <S.P_Description>Desenvolvido por Olavo Marques, Desenvolvedor Full Stack | . 🧑🏽‍💻</S.P_Description>
            </footer>
        </S.Body_style >

    )
}
export default HomePage
