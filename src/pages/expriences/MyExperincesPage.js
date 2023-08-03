import { useNavigate } from "react-router-dom"
import { goToHomePage } from "../../routes/Cordenator"

const MyExperiences = () => {
    const navigate = useNavigate()

    return (
        <div>
            <button onClick={() => goToHomePage(navigate)}>Home</button>
            <h3>Experiência 1</h3>
            <h3>Experiência 2</h3>
            <h3>Experiência3</h3>
        </div>
    )
}
export default MyExperiences