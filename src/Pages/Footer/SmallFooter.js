import React from "react"

const SmallFooter = () => {
  let year = new Date()
  return (
    <footer className="footer2">
      <div className="container">
        <p>
          Copyright &#169; {year.getFullYear()} All Rights Reserved
      </p>
      </div>
    </footer>
  )
}

export default SmallFooter