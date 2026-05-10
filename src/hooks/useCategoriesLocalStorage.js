import React, { useCallback } from 'react'

const useCategoriesLocalStorage = () => {
	const savedCategories = localStorage.getItem('categories')

	const saveCategories = useCallback(categories => {
		localStorage.setItem('categories', JSON.stringify(categories))
	}, [])

	return {
		savedCategories: savedCategories ? JSON.parse(savedCategories) : null,
		saveCategories
	}
}

export default useCategoriesLocalStorage
