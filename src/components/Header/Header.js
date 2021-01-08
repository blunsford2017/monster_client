import './Header.css';
import Logo from '../../images/logo.png';

const Header = () => {
    return (
        <>
        <div className="header">
            <h1> Monster Creator </h1>
        </div>
        <div className="header">
            <img src={Logo} alt="Logo" />
        </div>
        </>
    );
}

export default Header;