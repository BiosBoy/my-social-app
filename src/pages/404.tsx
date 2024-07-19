import Link from 'next/link'

const NotFoundPage = () => (
  <div>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <Link href="/">
      <a>Go to Home Page</a>
    </Link>
  </div>
)

export default NotFoundPage
