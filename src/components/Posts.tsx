import { useGetPostsQuery } from '../store/services/posts-api'

const Posts = () => {
  const { error, isLoading, data } = useGetPostsQuery()

  if (isLoading) {
    return <div>loading</div>
  }

  if (error) {
    return <div>error</div>
  }

  return (
    <div>
      <ul>
        {data?.map((el) => (
          <li>{el.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Posts
