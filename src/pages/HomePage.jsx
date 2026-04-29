import { useState } from 'react'
import CreateOrChooseCategory from '../components/CreateOrChooseCategory/CreateOrChooseCategory'
import Todo from '../components/Todo/Todo'

const HomePage = () => {
	const [categories, setCategories] = useState(() => {
		const savedCategories = localStorage.getItem('categories')

		if (savedCategories) {
			return JSON.parse(savedCategories)
		}

		return [
			{ id: 1, category_title: 'Exercise' },
			{ id: 2, category_title: 'Read books' },
			{ id: 3, category_title: 'Meditate' },
			{ id: 4, category_title: 'Plan meals' },
			{ id: 5, category_title: 'Water plants' },
			{ id: 6, category_title: 'Journal' },
			{ id: 7, category_title: 'Stretch for 15 mins' },
			{ id: 8, category_title: 'Review goals before' },
			{ id: 9, category_title: 'Art' },
			{ id: 10, category_title: 'Sport' },
			{ id: 11, category_title: 'Dist' },
			{ id: 12, category_title: 'Garden' }
		]
	})

	const [selectedCategoryId, setSelectedCategoryId] = useState('')

	return (
		<section className="home section">
			<Todo
				categories={categories}
				selectedCategoryId={selectedCategoryId}
			/>
			<CreateOrChooseCategory
				categories={categories}
				setCategories={setCategories}
				selectedCategoryId={selectedCategoryId}
				setSelectedCategoryId={setSelectedCategoryId}
			/>
		</section>
	)
}

export default HomePage
