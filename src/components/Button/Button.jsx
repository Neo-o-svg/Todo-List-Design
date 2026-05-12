import styles from './Button.module.scss'

const Button = ({ text, style, isDisables }) => {
	return (
		<button
			className={`${styles.btn}`}
			style={style}
			disabled={isDisables}
		>
			{text}
		</button>
	)
}

export default Button
