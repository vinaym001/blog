import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, author, avatarUrl, imageUrl, topic} = blogDetails
  return (
    <Link to={`/blogs/${id}`}>
      <li className="li-container">
        <img src={imageUrl} className="img1" alt={title} />
        <div>
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-details-container">
            <img src={avatarUrl} className="avatar" alt="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default BlogItem
