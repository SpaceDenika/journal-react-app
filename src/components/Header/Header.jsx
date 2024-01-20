import './Header.css';
import logo from '../../assets/logo.svg';
import SelectUser from '../SelectUser/SelectUser';

function Header() {
	return(
		<header className="header">
			<img className="header__logo" src={logo} alt="Логотип" />
			<SelectUser />
		</header>
	);
}

export default Header;