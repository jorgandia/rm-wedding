import React from 'react'

const Article = ({
  id,
  title,
  picture,
  children,
  article,
  articleTimeout,
  onClick,
}) => {
  return (
    <article
      id={id}
      className={`${article === id ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">{title}</h2>
      <span className="image main">
        <img src={picture} alt="" />
      </span>
      {children}
      <div className="close" onClick={onClick} />
    </article>
  )
}

export default Article
