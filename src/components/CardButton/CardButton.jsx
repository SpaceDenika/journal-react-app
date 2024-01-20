import './CardButton.css';

function CardButton({ children, className, onClick }) {
	const cl = `${className ? 'card-button ' + className : 'card-button'}`;

	return (
		<button onClick={onClick} className={cl}>{children}</button>
	);
}

export default CardButton;