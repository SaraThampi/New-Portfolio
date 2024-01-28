import two_pink_balloons from "../assets/two_pink_balloons.png"

export default function Balloons() {
    return(
        <div className="balloon-container">
            <img src={two_pink_balloons} height={250} alt="pink balloons"/>
        </div>
    )
}