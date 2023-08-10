import { goToMyExperinces, goTomyHistory } from '../../routes/Cordenator'
import IconeLinkedin from '../../assets/icone_linkedin.png'
// import Projeto_Case_Promobit from '../../assets/promobit.png'
// import Projeto_Labefoods from '../../assets/Labefoods.png'
import Img_Profile from '../../assets/photo_perfil.jpg'
// import Projeto_Pokedex from '../../assets/pokedex.png'
import Icone_Whatsapp from '../../assets/whatsapp.png'
import Icone_Email from '../../assets/o-email.png'
import { useNavigate } from 'react-router-dom';
import * as S from "./HomePage-Style"
import ProjectPokedex from '../../projects/Pokedex'
import ProjectPromobit from '../../projects/Promobit'
import ProjectLabefoods from '../../projects/Labefoods'

const HomePage = () => {
    const navigate = useNavigate()

    // const selectProject = () => {
    //     return (
    //         <>
    //             < ProjectPokedex />
    //             < ProjectPromobit />
    //         </>
    //     )
    // }

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

                <ProjectPromobit />

                <ProjectPokedex />
                {/* // {selectProject()} */}

                <ProjectLabefoods />

            </div>

            <footer>
                <S.Container_Contact>

                    <a href="https://www.linkedin.com/in/olavo-marques-6421ab123/" target="_blank" rel="noreferrer"><S.Img_Icone_Linkedin src={IconeLinkedin} alt="Icone Linkedin" /></a>

                    <S.Div_Contact>

                        <S.Img_Icone_Whatsapp src={Icone_Whatsapp} alt="Icone Whatsapp" />

                        <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer"><S.P_Contatc>11948032907</S.P_Contatc></a>

                    </S.Div_Contact>

                    <S.Div_Contact>

                        <S.Img_Icone_Email src={Icone_Email} alt="Icone Email" />

                        <a href="https://www.google.com/intl/pt-BR/gmail/about/" target="_blank" rel="noreferrer"><S.P_Contatc><S.P_Contatc>omarquesdonascimento@gmail.com</S.P_Contatc></S.P_Contatc></a>

                    </S.Div_Contact>

                </S.Container_Contact>

                <S.P_Description>Desenvolvido por Olavo Marques, Desenvolvedor Full Stack | . 🧑🏽‍💻</S.P_Description>

            </footer>
        </S.Body_style >

    )
}
export default HomePage
