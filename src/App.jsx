import './App.css';
import { useState, useEffect } from 'react';
import JournalList from './components/JournalList/JournalList';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import JournalForm from './components/JournalForm/JournalForm';

function App() {
	const [posts, setPosts] = useState([]);

	const formSubmitHandler = (formData) => {
		setPosts([...posts, {
			title: formData.title,
			date: new Date(formData.date),
			content: formData.content,
			id: posts.length > 0 ? Math.max(...posts.map(item => item.id)) + 1 : 1
		}]);
	};

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('data'));
		if (data) {
			setPosts(data.map(item => ({
				...item,
				date: new Date(item.date)
			})));
		}
	}, []);

	useEffect(() => {
		if (posts.length) {
			localStorage.setItem('data', JSON.stringify(posts));
		}
	}, [posts]);

	return (
		<div className="app">
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList posts={posts} />
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={formSubmitHandler} />
			</Body>
		</div>
	);
}

export default App;
