import '../assets/styles/Banner.css'
import logo from '../assets/logo.png'
function Banner() {
    const title="la maison jungle"
    return (
     <div className="lmj-banner">
        <img className='lmj-logo'src={logo} alt=" la maison jungle" />
        <h1 className='lmj-title'>{title}</h1>
     </div>
    )
}

export default Banner