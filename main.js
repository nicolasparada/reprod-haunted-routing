import { createRouter } from 'https://unpkg.com/@nicolasparada/router@0.8.0/router.js'
import { html, render, useEffect, useState, withHooks } from 'https://unpkg.com/haunted@4.1.4/haunted.js'
import Header from './components/header.js'
import Loader from './components/loader.js'

const r = createRouter()
r.route('/', load('home-page'))
r.route('/about', load('about-page'))
r.route(/^\//, load('not-found-page'))

const App = withHooks(() => {
	const [page, setPage] = useState(html`${Loader()}`)

	useEffect(() => {
		r.subscribe(async result => {
			setPage(html`${Loader()}`)
			setPage(html`${await result}`)
		})
		r.install()
	}, [])

	return html`
		${Header()}
		${page}
	`
})

function load(component) {
	return (...args) => import(`/components/${component}.js`)
		.then(m => m.default(...args))
}

render(html`${App()}`, document.body)
