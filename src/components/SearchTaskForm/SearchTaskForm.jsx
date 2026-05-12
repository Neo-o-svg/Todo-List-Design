import { memo, useContext } from 'react'
import { TasksContext } from '../../context/TasksContext'

import Button from '../Button/Button'
import Field from '../Field/Field'

import styles from '../AddTaskForm/AddTaskForm.module.scss'

const SearchTaskForm = () => {
	const { searchQuery, setSearchQuery } = useContext(TasksContext)

	return (
		<form
			className={`${styles.form} ${styles.searchForm}`}
			onSubmit={event => event.preventDefault()}
		>
			<Field
				label="Search task"
				id="search-task"
				type="search"
				value={searchQuery}
				onInput={event => setSearchQuery(event.target.value)}
			/>
		</form>
	)
}

export default memo(SearchTaskForm)
