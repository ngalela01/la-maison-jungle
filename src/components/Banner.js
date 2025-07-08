import '../assets/styles/Banner.css'
import logo from '../assets/logo.png'
function Banner() {
    const title="la maison jungle"
    return (
     <div className="lmj-banner">
        <img src="../assets/styles/logo.png" alt="image-logo la maison-jungle" />
        <h1>{title}</h1>
     </div>
    )
}

export default Banner