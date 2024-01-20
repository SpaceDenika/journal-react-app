import './SelectUser.css';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

function SelectUser() {
	const { userId, setUserId } = useContext(UserContext);

	const changeSelectValue = (e) => {
		setUserId(Number(e.target.value));
	};

	return (
		<select className="select-user" name="user" id="user" value={userId} onChange={changeSelectValue}>
			<option value="1">Пользователь 1</option>
			<option value="2">Пользователь 2</option>
		</select>
	);
}

export default SelectUser;