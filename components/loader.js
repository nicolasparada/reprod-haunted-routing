import { html, useEffect, useState, withHooks } from 'https://unpkg.com/haunted@4.1.4/haunted.js'

const Loader = withHooks(() => {
    const [shown, setShown] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShown(true)
        }, 100)
        return () => {
            clearTimeout(timeout)
        }
    }, [])

    if (!shown) {
        return null
    }

    return html`
        <div>
            <pre>Loading... Please wait.</pre>
        </div>
	`
})

export default Loader
