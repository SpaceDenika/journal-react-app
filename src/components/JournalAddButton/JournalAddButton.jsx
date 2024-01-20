import './JournalAddButton.css';
import CardButton from '../CardButton/CardButton';

function JournalAddButton({ onClick }) {
	return (
		<CardButton onClick={onClick} className="journal-add">
      Добавить воспоминание
		</CardButton>
	);
}

export default JournalAddButton;