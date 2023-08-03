import { useNavigate } from 'react-router-dom';
import { goToMyExperinces, goTomyHistory } from '../../routes/Cordenator'
import IconeLinkedin from '../../assets/download-linkedin.png'
import Projeto_1 from '../../assets/mar e sol.avif'
import Projeto_2 from '../../assets/bela-vista-da-luz-da-manha.jpg'
import Projeto_3 from '../../assets/sol-2.webp'
import Projeto_4 from '../../assets/sol-3.jpg'
import Img_Profile from '../../assets/IMG_20211004_062928_4.jpg'
import * as S from "./HomePage-Style"

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <S.Body_style>
            <S.Img_Profile_Container src={Img_Profile} />

            <S.Header_About>
                <S.Button_Text_About onClick={() => goTomyHistory(navigate)}>Minha Historia</S.Button_Text_About>
                <S.Button_Text_About onClick={() => goToMyExperinces(navigate)}>Minhas Experiências</S.Button_Text_About>
            </S.Header_About>

            <S.Div_Information_Projects>
                <a href="https://www.linkedin.com/in/olavo-marques-6421ab123/" ><S.Img_Project src={Projeto_1} /></a>
                <S.P_Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit labore corporis possimus vitae itaque
                    asperiores dolor eaque sapiente aliquam ratione reprehenderit rem architecto dolores officia, sint libero.
                    Necessitatibus repellat cupiditate ratione ea fugit accusamus eligendi, tempore nisi accusantium?
                    Inventore accusamus modi, fugit similique quibusdam incidunt quis deleniti cupiditate corporis quod quia
                    aliquid excepturi commodi nesciunt neque magnam vero rerum architecto non ex cumque. Aut harum corporis
                    aperiam, perferendis, nam quaerat sapiente itaque similique, beatae deserunt cumque laboriosam eveniet dicta
                    nemo blanditiis libero voluptatem. Perferendis aspernatur assumenda tempora dicta ipsa voluptates, qui accusantium
                    odit explicabo eum reiciendis nesciunt ratione suscipit impedit?</S.P_Description>
            </S.Div_Information_Projects>
            <S.Div_Information_Projects>
                <a href="https://www.linkedin.com/in/olavo-marques-6421ab123/" ><S.Img_Project src={Projeto_2} /></a>
                <S.P_Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit labore corporis possimus vitae itaque
                    asperiores dolor eaque sapiente aliquam ratione reprehenderit rem architecto dolores officia, sint libero.
                    Necessitatibus repellat cupiditate ratione ea fugit accusamus eligendi, tempore nisi accusantium?
                    Inventore accusamus modi, fugit similique quibusdam incidunt quis deleniti cupiditate corporis quod quia
                    aliquid excepturi commodi nesciunt neque magnam vero rerum architecto non ex cumque. Aut harum corporis
                    aperiam, perferendis, nam quaerat sapiente itaque similique, beatae deserunt cumque laboriosam eveniet dicta
                    nemo blanditiis libero voluptatem. Perferendis aspernatur assumenda tempora dicta ipsa voluptates, qui accusantium
                    odit explicabo eum reiciendis nesciunt ratione suscipit impedit?</S.P_Description>
            </S.Div_Information_Projects>
            <S.Div_Information_Projects>
                <a href="https://www.linkedin.com/in/olavo-marques-6421ab123/" ><S.Img_Project src={Projeto_3} /></a>
                <S.P_Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit labore corporis possimus vitae itaque
                    asperiores dolor eaque sapiente aliquam ratione reprehenderit rem architecto dolores officia, sint libero.
                    Necessitatibus repellat cupiditate ratione ea fugit accusamus eligendi, tempore nisi accusantium?
                    Inventore accusamus modi, fugit similique quibusdam incidunt quis deleniti cupiditate corporis quod quia
                    aliquid excepturi commodi nesciunt neque magnam vero rerum architecto non ex cumque. Aut harum corporis
                    aperiam, perferendis, nam quaerat sapiente itaque similique, beatae deserunt cumque laboriosam eveniet dicta
                    nemo blanditiis libero voluptatem. Perferendis aspernatur assumenda tempora dicta ipsa voluptates, qui accusantium
                    odit explicabo eum reiciendis nesciunt ratione suscipit impedit?</S.P_Description>
            </S.Div_Information_Projects>
            <S.Div_Information_Projects>
                <a href="https://www.linkedin.com/in/olavo-marques-6421ab123/" ><S.Img_Project src={Projeto_4} /></a>
                <S.P_Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit labore corporis possimus vitae itaque
                    asperiores dolor eaque sapiente aliquam ratione reprehenderit rem architecto dolores officia, sint libero.
                    Necessitatibus repellat cupiditate ratione ea fugit accusamus eligendi, tempore nisi accusantium?
                    Inventore accusamus modi, fugit similique quibusdam incidunt quis deleniti cupiditate corporis quod quia
                    aliquid excepturi commodi nesciunt neque magnam vero rerum architecto non ex cumque. Aut harum corporis
                    aperiam, perferendis, nam quaerat sapiente itaque similique, beatae deserunt cumque laboriosam eveniet dicta
                    nemo blanditiis libero voluptatem. Perferendis aspernatur assumenda tempora dicta ipsa voluptates, qui accusantium
                    odit explicabo eum reiciendis nesciunt ratione suscipit impedit?</S.P_Description>
            </S.Div_Information_Projects>

            <footer>
                <a href="https://www.linkedin.com/in/olavo-marques-6421ab123/" ><img src={IconeLinkedin} /></a>
                <S.P_Description>Desenvolvido por <a href="https://www.linkedin.com/in/olavo-marques-6421ab123/"> Olavo Marques</a>. 🧑🏽‍💻</S.P_Description>
            </footer>
        </S.Body_style >
    )
}
export default HomePage
