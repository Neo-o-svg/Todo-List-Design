import { TasksProvider } from '../context/TasksContext'

import CreateOrChooseCategory from '../components/CreateOrChooseCategory/CreateOrChooseCategory'
import Todo from '../components/Todo/Todo'

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
