import './JournalList.css';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

function JournalList({ posts }) {
	const { userId } = useContext(UserContext);

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
			{posts.length > 0 && posts.filter(post => post.userId === userId).sort(sortPosts).map(el => (
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