const URL = 'http://localhost:3001/categories'

const headers = {
	'Content-Type': 'application/json'
}

const categoriesAPI = {
	add: category => {
		return fetch(URL, {
			method: 'POST',
			headers,
			body: JSON.stringify(category)
		}).then(response => response.json())
	},
	delete: id => {
		return fetch(`URL/${id}`, {
			method: 'DELETE'
		})
	}
}

export default categoriesAPI
