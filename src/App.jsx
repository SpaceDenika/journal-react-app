import './App.css';
import JournalList from './components/JournalList/JournalList';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import JournalForm from './components/JournalForm/JournalForm';
import useLocalStorage from './hooks/UseLocalStorage.hook';
import { UserContextProvider } from './context/user.context';

function mapPosts(posts) {
	if (!posts) {
		return [];
	}

	return posts.map(post => ({
		...post,
		date: new Date(post.date)
	}));
}

function App() {
	const [posts, savePosts] = useLocalStorage('data');

	const formSubmitHandler = (formData) => {
		savePosts([...mapPosts(posts), {
			...formData,
			date: new Date(formData.date),
			id: posts.length > 0 ? Math.max(...posts.map(post => post.id)) + 1 : 1
		}]);
	};

	return (
		<UserContextProvider>
			<div className="app">
				<LeftPanel>
					<Header />
					<JournalAddButton />
					<JournalList posts={mapPosts(posts)} />
				</LeftPanel>
				<Body>
					<JournalForm onSubmit={formSubmitHandler} />
				</Body>
			</div>
		</UserContextProvider>
	);
}

export default App;