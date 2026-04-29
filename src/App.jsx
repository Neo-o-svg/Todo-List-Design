import IntroPage from './pages/IntroPage'
import HomePage from './pages/HomePage'

import Router from './Router'

function App() {
	const routes = {
		'/': IntroPage,
		'/home': HomePage,
		'*': () => {
			;<div className="">404 Not Found</div>
		}
	}
	return <Router routes={routes} />
}

export default App
