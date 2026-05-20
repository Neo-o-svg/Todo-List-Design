import IntroPage from './pages/IntroPage'
import HomePage from './pages/HomePage'

import Router from './Router'
import CategoryPage from './pages/CategoryPage'

function App() {
	const routes = {
		'/': IntroPage,
		'/home': HomePage,
		'/tasks/:category': CategoryPage,
		'*': () => {
			;<div className="">404 Not Found</div>
		}
	}
	return <Router routes={routes} />
}

export default App
