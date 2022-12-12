import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {individualBlogDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogIdDetails()
  }

  getBlogIdDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const blogIdDetails = {
      author: data.author,
      avatarUrl: data.avatar_url,
      id: data.id,
      imageUrl: data.image_url,
      topic: data.topic,
      title: data.title,
      content: data.content,
    }
    this.setState({individualBlogDetails: blogIdDetails, isLoading: false})
  }

  render() {
    const {isLoading} = this.state
    const {individualBlogDetails} = this.state
    const {
      title,
      author,
      avatarUrl,
      imageUrl,
      topic,
      content,
    } = individualBlogDetails

    return (
      <div className="bg">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="cont">
            <h1 className="heading">{title}</h1>
            <div className="avatar-name-container">
              <img src={avatarUrl} className="avatar" alt="avatar" />
              <p>{author}</p>
            </div>
            <img src={imageUrl} className="img" alt={title} />
            <p className="content">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
