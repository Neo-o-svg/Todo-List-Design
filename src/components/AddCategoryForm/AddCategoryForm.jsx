import { memo, useContext } from 'react'

import { TasksContext } from '../../context/TasksContext'

import Button from '../Button/Button'
import Field from '../Field/Field'

import styles from '../AddTaskForm/AddTaskForm.module.scss'

const AddCategoryForm = () => {
	const { addCategory, newCategoryTitle, setNewCategoryTitle } =
		useContext(TasksContext)

	const onSubmit = event => {
		event.preventDefault()
		addCategory()
	}

	return (
		<form
			className={`${styles.form}`}
			onSubmit={onSubmit}
		>
			<Field
				label="New category"
				id="new-category"
				value={newCategoryTitle}
				onInput={event => setNewCategoryTitle(event.target.value)}
			/>
			<Button
				type="submit"
				text={'Add'}
			/>
		</form>
	)
}

export default memo(AddCategoryForm)
