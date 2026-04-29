import styles from './CategoryButton.module.scss'

const CategoryButton = ({ category }) => {
	return (
		<div className={`${styles.categoryBtn}`}>
			<p className={`${styles.categoryBtn__text}`}>{category}</p>
		</div>
	)
}

export default CategoryButton
