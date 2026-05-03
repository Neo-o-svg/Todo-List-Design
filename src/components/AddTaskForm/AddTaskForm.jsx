import { memo, useContext } from 'react'
import Button from '../Button/Button'
import Field from '../Field/Field'

import styles from './AddTaskForm.module.scss'
import { TasksContext } from '../../context/TasksContext'

const AddTaskForm = () => {
	const { addTask, newTaskTitle, setNewTaskTitle, ctgError } =
		useContext(TasksContext)

	const onSubmit = event => {
		event.preventDefault()
		addTask()
	}

	return (
		<form
			className={`${styles.form}`}
			onSubmit={onSubmit}
		>
			{ctgError && <p className={`${styles.ctgError}`}>Choose category</p>}

			<Field
				label="Write a task..."
				id="new-task"
				value={newTaskTitle}
				onInput={event => setNewTaskTitle(event.target.value)}
			/>
			<Button
				type="submit"
				text={'Add'}
			/>
		</form>
	)
}

export default memo(AddTaskForm)
