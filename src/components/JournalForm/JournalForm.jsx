import './JournalForm.css';
import { useContext, useEffect, useReducer } from 'react';
import Button from '../Button/Button';
import date from '../../assets/date.svg';
import tag from '../../assets/tag.svg';
import { INITIAL_DATA, formReducer } from './JournalForm.state';
import { UserContext } from '../../context/user.context';

function JournalForm({ selectedPost, onSubmit }) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_DATA);
	const { values, isValid } = formState;
	const { userId } = useContext(UserContext);

	useEffect(() => {
		dispatchForm({ type: 'SET_VALUE', payload: selectedPost });
	}, [selectedPost]);

	useEffect(() => {
		dispatchForm({ type: 'SET_VALUE', payload: { userId } });
	}, [userId]);

	useEffect(() => {
		dispatchForm({ type: 'CHECK_VALID' });
	}, [values]);

	const addJournalItem = (e) => {
		e.preventDefault();
		onSubmit(values);
		dispatchForm({ type: 'CLEAR' });
		dispatchForm({ type: 'SET_VALUE', payload: { userId } });
	};

	const changeInputHandler = (e) => {
		dispatchForm({ type: 'SET_VALUE', payload: { [e.target.name]: e.target.value } } );
	};
  
	return (
		<form className="journal-form" onSubmit={addJournalItem}>
			<input minLength={3} className="journal-form__input journal-form__input_title" type="text" name="title" placeholder='Заголовок...' value={values.title} onChange={changeInputHandler} />
			<label className="journal-form__label" htmlFor="date">
				<img src={date} alt="Иконка календаря" />
				<span className="journal-form__span">Дата</span>
				<input id='date' className="journal-form__input journal-form__input_date" type="date" name="date" value={values.date ? new Date(values.date).toISOString().slice(0, 10) : ''} onChange={changeInputHandler} />
			</label>
			<label className="journal-form__label" htmlFor="tag">
				<img src={tag} alt="Иконка папки" />
				<span className="journal-form__span">Метки</span>
				<input id='tag' className="journal-form__input journal-form__input_tag" type="text" name="tag" value={values.tag} onChange={changeInputHandler} />
			</label>
			<textarea minLength={5} className="journal-form__input journal-form__input_content" name="content" id="" cols="30" rows="10" placeholder='Текст...' value={values.content} onChange={changeInputHandler}></textarea>
			<Button disabled={!isValid}>Сохранить</Button>
		</form>
	);
}

export default JournalForm;


/////////////////////////////////////////////////////////

/*
import './JournalForm.css';
import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import date from '../../assets/date.svg';
import tag from '../../assets/tag.svg';

function JournalForm({ onSubmit }) {
	const [inputsState, setInputsState] = useState({
		title: '',
		date: '',
		tag: '',
		content: ''
	});

	const [isFormValid, setIsFormValid] = useState(false);

	const addJournalItem = (e) => {
		e.preventDefault();
		onSubmit(inputsState);
	};

	const isValid = () => {
		if (inputsState.title.trim().length >= 3 && inputsState.date && inputsState.tag.trim().length && inputsState.content.trim().length >= 5) {
			setIsFormValid(true);
		} else {
			setIsFormValid(false);
		}
	};
  
	useEffect(() => {
		isValid();
	}, [inputsState]);

	return (
		<form className="journal-form" onSubmit={addJournalItem}>
			<input minLength={3} className="journal-form__input journal-form__input_title" type="text" name="title" value={inputsState.title} onChange={(e) => setInputsState({...inputsState, title: e.target.value})} placeholder='Заголовок...' />
			<label className="journal-form__label" htmlFor="date">
				<img src={date} alt="Иконка календаря" />
				<span className="journal-form__span">Дата</span>
				<input id='date' className="journal-form__input journal-form__input_date" type="date" name="date" value={inputsState.date} onChange={(e) => setInputsState({...inputsState, date: e.target.value})} />
			</label>
			<label className="journal-form__label" htmlFor="tag">
				<img src={tag} alt="Иконка папки" />
				<span className="journal-form__span">Метки</span>
				<input id='tag' className="journal-form__input journal-form__input_tag" type="text" name="tag" value={inputsState.tag} onChange={(e) => setInputsState({...inputsState, tag: e.target.value})} />
			</label>
			<textarea minLength={5} className="journal-form__input journal-form__input_content" name="content" id="" cols="30" rows="10" value={inputsState.content} onChange={(e) => setInputsState({...inputsState, content: e.target.value})} placeholder='Текст...'></textarea>
			<Button disabled={!isFormValid} text="Сохранить" />
		</form>
	);
}

export default JournalForm;
*/