import CreateOrChooseCategory from '../components/CreateOrChooseCategory/CreateOrChooseCategory'
import Todo from '../components/Todo/Todo'
import { TasksProvider } from '../context/TasksContext'

const HomeContent = () => {
	return (
		<section className="home section">
			<Todo />
			<CreateOrChooseCategory />
		</section>
	)
}

const HomePage = () => (
	<TasksProvider>
		<HomeContent />
	</TasksProvider>
)

export default HomePage
