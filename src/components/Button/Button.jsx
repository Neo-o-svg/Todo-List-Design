import styles from './Button.module.scss'

const Button = ({ text, style }) => {
	return (
		<button
			className={`${styles.btn}`}
			style={style}
		>
			{text}
		</button>
	)
}

export default Button
