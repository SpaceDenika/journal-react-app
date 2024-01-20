import './JournalForm.css';
import { useContext, useEffect, useReducer } from 'react';
import Button from '../Button/Button';
import date from '../../assets/date.svg';
import tag from '../../assets/tag.svg';
import { INITIAL_DATA, formReducer } from './JournalForm.state';
import { UserContext } from '../../context/user.context';

function JournalForm({ selectedPost, onSubmit, onDelete }) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_DATA);
	const { values, isValid } = formState;
	const { userId } = useContext(UserContext);

	useEffect(() => {
		if (!selectedPost) {
			dispatchForm({ type: 'CLEAR' });
			dispatchForm({ type: 'SET_VALUE', payload: { userId } });
		}
		dispatchForm({ type: 'SET_VALUE', payload: selectedPost });
	}, [selectedPost, userId]);

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

	const deleteJournalItem = () => {
		onDelete(selectedPost.id);
		dispatchForm({ type: 'CLEAR' });
		dispatchForm({ type: 'SET_VALUE', payload: { userId } });
	};
  
	return (
		<form className="journal-form" onSubmit={addJournalItem}>
			<div className="journal-form__input-wrapper">
				<input minLength={3} className="journal-form__input journal-form__input_title" type="text" name="title" placeholder='Заголовок...' value={values.title} onChange={changeInputHandler} />
				{selectedPost?.id && <button onClick={deleteJournalItem} className="journal-form__button" type="button"></button>}
			</div>
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
			<textarea minLength={5} className="journal-form__input journal-form__input_content" name="content" id="content" cols="30" rows="10" placeholder='Текст...' value={values.content} onChange={changeInputHandler}></textarea>
			<Button disabled={!isValid}>Сохранить</Button>
		</form>
	);
}

export default JournalForm;