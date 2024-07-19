import usePosts from '@/hooks/usePosts'

const Home = () => {
  const { posts } = usePosts()

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.date}>
            {post.date} {post.author.name}: {post.description}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
