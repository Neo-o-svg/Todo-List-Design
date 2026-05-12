import { memo, useContext, useState } from 'react'

import { TasksContext } from '../../context/TasksContext'

import Button from '../Button/Button'
import Field from '../Field/Field'

import styles from '../AddTaskForm/AddTaskForm.module.scss'

const AddCategoryForm = () => {
	const { addCategory, newCategoryTitle, setNewCategoryTitle } =
		useContext(TasksContext)

	const [error, setError] = useState('')

	const clearNewCategoryTitle = newCategoryTitle.trim()
	const isNewCategoryTitleEmpty = clearNewCategoryTitle.length === 0

	const onSubmit = event => {
		event.preventDefault()
		addCategory(clearNewCategoryTitle)
	}

	const onInput = event => {
		const { value } = event.target
		const clearValue = value.trim()
		const hasOnlySpaces = value.length > 0 && clearValue.length === 0

		setNewCategoryTitle(value)
		setError(hasOnlySpaces ? 'The category cannot be empty' : '')
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
				error={error}
				onInput={onInput}
			/>
			<Button
				type="submit"
				text={'Add'}
				isDisables={isNewCategoryTitleEmpty}
			/>
		</form>
	)
}

export default memo(AddCategoryForm)
