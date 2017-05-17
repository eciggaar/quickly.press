import React from 'react';

const Heading = ({ children, subtitle }) => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-spaced">
            {children}
          </h1>
          <h2 className="subtitle">
            {subtitle}
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Heading;