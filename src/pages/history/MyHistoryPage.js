import { useNavigate } from "react-router-dom"
import { goToHomePage } from "../../routes/Cordenator"

const MyHistory = () => {
    const navigate = useNavigate()

    return (
        <div>
            <button onClick={() => goToHomePage(navigate)}>Home</button>
            <p>Senta que lavem a historia</p>
        </div>
    )
}
export default MyHistory