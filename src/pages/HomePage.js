import { useNavigate } from 'react-router-dom';
import { goToMyExperinces, goTomyHistory } from '../routes/Cordenator'
const HomePage = () => {
    const navigate = useNavigate()

    return (
        <body>
            <header>
                <h3 onClick={() => goTomyHistory(navigate)}>Minha Historia</h3>
                <h3 onClick={() => goToMyExperinces(navigate)}>Minhas Experiência</h3>
            </header>

            <div><h1>Projeto 1</h1></div>
            <div><h1>Projeto 2</h1></div>
            <div><h1>Projeto 3</h1></div>
            <div><h1>Projeto 4</h1></div>
        </body >
    )
}
export default HomePage
