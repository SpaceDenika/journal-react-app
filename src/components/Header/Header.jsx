import './Header.css';
import logo from '../../assets/logo.svg';

function Header() {
	return(
		<header>
			<img src={logo} alt="Логотип" />
		</header>
	);
}

export default Header;