import { html } from 'https://unpkg.com/haunted@4.1.4/haunted.js'

export default function Header() {
    return html`
        <header>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
            </nav>
        </header>
	`
}
