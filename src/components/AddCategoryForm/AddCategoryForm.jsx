import Button from '../Button/Button'
import Field from '../Field/Field'

import styles from '../AddTaskForm/AddTaskForm.module.scss'
import { memo } from 'react'

const AddCategoryForm = props => {
	const { addCategory, newCategoryTitle, setNewCategoryTitle } = props

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

export default AddCategoryForm
