import './Button.css';

function Button({ text, ...props }) {
	return (
		<button {...props} className="button">{text}</button>
	);
}

export default Button;