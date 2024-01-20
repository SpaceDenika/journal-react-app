import './JournalItem.css';

function JournalItem({ data }) {
	const formatedDate = new Intl.DateTimeFormat('ru-RU').format(data.date);

	return (
		<>
			<div className="journal-item__container">
				<h2 className="journal-item__title">{data.title}</h2>
				<div className="journal-item__content">
					<div className="journal-item__info">
						<p className="journal-item__date">{formatedDate}</p>
						<span className="journal-item__tag">{data.tag}</span>
					</div>
					
					<p className="journal-item__text">{data.content}</p>
				</div>
			</div>
		</>
	);
}

export default JournalItem;