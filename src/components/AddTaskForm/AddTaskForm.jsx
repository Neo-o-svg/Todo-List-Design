import Button from '../Button/Button'
import Field from '../Field/Field'

import styles from './AddTaskForm.module.scss'

const AddTaskForm = props => {
	const { addTask, newTaskTitle, setNewTaskTitle, ctgError } = props

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
				ctgError={ctgError}
			/>
			<Button
				type="submit"
				text={'Add'}
			/>
		</form>
	)
}

export default AddTaskForm
