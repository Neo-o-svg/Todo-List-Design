import Wrapper from '../components/Wrapper/Wrapper'
import CategoryButton from '../components/CategoryButton/CategoryButton'
import Button from '../components/Button/Button'
import RouterLink from '../components/RouterLink/RouterLink'

import styles from '../components/Wrapper/Wrapper.module.scss'

const IntroPage = () => {
	const categories = [
		'Exercise',
		'Read books',
		'Meditate',
		'Plan meals',
		'Water plants',
		'Journal',
		'Stretch for 15 mins',
		'Review goals before'
	]

	return (
		<section className="intro container">
			<h1
				className="main__title"
				style={{
					fontSize: '36',
					marginTop: '200px',
					marginBottom: '180px',
					marginLeft: '20px'
				}}
			>
				Pick some new <br /> habits to get started
			</h1>
			<p
				className={`${styles.wrapper__text}`}
				style={{ marginLeft: '20px' }}
			>
				RECOMMENDED
			</p>
			<div className="intro__categories">
				{categories.map(category => (
					<CategoryButton category={category} />
				))}
			</div>

			<RouterLink
				to={'/home'}
				aria-label="Go to home page"
			>
				<Button
					text={'Continue'}
					style={{ width: '386px', marginTop: '50px' }}
				/>
			</RouterLink>
		</section>
	)
}

export default IntroPage
