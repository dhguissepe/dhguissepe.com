import React from 'react'

function CTA() {
  return (
    <section className="CTA">
      <div className="CTA-wrapper">
        <h2 className="CTA-title">
          Hi! Don't you know who I am?<br />
          Have your first impression below!
        </h2>
        <p className="CTA-text">
          I'm Daniel H. Guissepe and, as a full stack JavaScript developer, I have worked
          on different kind of projects through the time. From simple static sites to
          dynamic web applications made with MERN stack (MongoDB, Express, React and Node).
          This site represents me and shows you who I am. Find out what I can do and reach
          me out!
        </p>
        <div className="CTA-buttons-wrapper">
          <button className="btn-primary">Let's start a conversation</button>
          <span className="CTA-or-between-btn">Or</span>
          <button className="btn-outline">Let's take a look to my portfolio</button>
        </div>
      </div>
    </section>
  )
}

export default CTA