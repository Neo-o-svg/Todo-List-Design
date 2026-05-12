import { memo, useContext, useState } from 'react'

import { TasksContext } from '../../context/TasksContext'

import Button from '../Button/Button'
import Field from '../Field/Field'

import styles from './AddTaskForm.module.scss'

const AddTaskForm = () => {
	const { addTask, newTaskTitle, setNewTaskTitle, ctgError } =
		useContext(TasksContext)

	const [error, setError] = useState('')

	const clearNewTaskTitle = newTaskTitle.trim()
	const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0

	const onSubmit = event => {
		event.preventDefault()
		addTask(clearNewTaskTitle)
	}

	const onInput = event => {
		const { value } = event.target
		const clearValue = value.trim()
		const hasOnlySpaces = value.length > 0 && clearValue.length === 0

		setNewTaskTitle(value)
		setError(hasOnlySpaces ? 'The title cannot be empty' : '')
	}

	return (
		<form
			className={`${styles.form}`}
			onSubmit={onSubmit}
		>
			{ctgError && <p className="ctgError">Choose category</p>}

			<Field
				label="Write a task..."
				id="new-task"
				value={newTaskTitle}
				error={error}
				onInput={onInput}
			/>
			<Button
				type="submit"
				text={'Add'}
				isDisables={isNewTaskTitleEmpty}
			/>
		</form>
	)
}

export default memo(AddTaskForm)
