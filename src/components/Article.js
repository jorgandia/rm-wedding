import React from 'react'

const Article = ({
  id,
  title,
  picture,
  children,
  article,
  articleTimeout,
  onClick,
  location,
  src,
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
      <span className={`image main ${location && 'location'}`}>
        {picture && <img src={picture} alt="" />}
        {location && (
          <iframe
            src={src}
            title={title}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen={true}
          />
        )}
      </span>
      {children}
      <div className="close" onClick={onClick} />
    </article>
  )
}

export default Article
