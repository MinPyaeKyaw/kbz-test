import { BlogInterface } from '../../../utils/interfaces';
import HorizontalCard from '../Card/HorizontalCard'
import Container from './Container'

interface Props {
  latestsBlogs: BlogInterface[];
}

export default function RecentPosts({latestsBlogs}:Props) {
  return (
    <div className='mt-4'>
        <Container title="Recent Posts">
            <div>
              {latestsBlogs.map(blog => {
                return(<HorizontalCard key={blog._id} blog={blog} />)
              })}
            </div>
        </Container>
    </div>
  )
}
