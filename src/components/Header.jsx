import '../App.css'
import balloons from '../assets/balloons.jpg'

export default function Header() {
    return(
        <div className='header-wrapper'>
            <img src={balloons} className="header-logo" alt="unsplash balloons Diya Pokharel" width={500} />
            <p className='nice-text'>Hello</p>
        </div>
    )
}