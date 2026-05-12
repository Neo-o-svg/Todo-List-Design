import { useContext } from 'react'
import { TasksContext } from '../../context/TasksContext'

import AddCategoryForm from '../AddCategoryForm/AddCategoryForm'

import styles from './CreateOrChooseCategory.module.scss'

const CreateOrChooseCategory = () => {
	const {
		categories,
		selectedCategoryId,
		setSelectedCategoryId,
		setNewCategoryTitle,
		addCategory,
		deleteCategory,
		newCategoryTitle,
		setCtgError
	} = useContext(TasksContext)

	return (
		<div className={`${styles.chooseCategory}`}>
			<h3 className={`${styles.chooseCategory__title}`}>Category</h3>

			<form className={`${styles.chooseCategoryForm}`}>
				<label
					className={`${styles.chooseCategoryLabel}`}
					htmlFor="category-select"
				>
					Saved Categories
				</label>
				<select
					className={`${styles.chooseCategorySelect}`}
					name="category"
					id="category-select"
					autoComplete="false"
					defaultValue={selectedCategoryId}
					onChange={e => {
						setSelectedCategoryId(e.target.value)
						setCtgError(false)
					}}
				>
					<option
						key=""
						value=""
						disabled
					>
						-- Choose Category --
					</option>

					{categories.map(category => (
						<option
							key={category.id}
							value={category.id}
						>
							{category.category_title}
						</option>
					))}
				</select>
			</form>

			{selectedCategoryId && (
				<button
					className={`${styles.deleteCtgButton}`}
					onClick={() => deleteCategory(selectedCategoryId)}
				>
					Удалить категорию "
					{categories.find(c => c.id == selectedCategoryId)?.category_title}"
				</button>
			)}

			<AddCategoryForm
				addCategory={addCategory}
				newCategoryTitle={newCategoryTitle}
				setNewCategoryTitle={setNewCategoryTitle}
				deleteCategory={deleteCategory}
			/>
		</div>
	)
}

export default CreateOrChooseCategory
