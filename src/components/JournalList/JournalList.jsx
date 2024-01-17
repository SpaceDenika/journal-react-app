import './JournalList.css';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';

function JournalList({ posts }) {
	const sortPosts = (a, b) => {
		if (a.date > b.date) {
			return -1;
		} else {
			return 1;
		}
	};

	return (
		<ul className="journal-list">
			{posts.length === 0 && <p>Записи отсутствуют, добавьте первую</p>}
			{posts.length > 0 && posts.sort(sortPosts).map(el => (
				<li key={el.id}>
					<CardButton>
						<JournalItem data={el} />
					</CardButton>
				</li>
			))}
		</ul>
	);
}

export default JournalList;