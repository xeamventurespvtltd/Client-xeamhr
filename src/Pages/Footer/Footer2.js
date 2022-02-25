import React from "react"
import { NavLink } from "react-router-dom"
import { dataFooter2 } from "../Data"

const Footer2 = ({ title }) => {
  return (
    <>
      <div className="footer-body">
        <h3>{title}</h3>
        {
          dataFooter2.map((data, ind) => {
            return <NavLink to={data.loc} key={ind}>{data.link}</NavLink>
          })
        }
      </div>
    </>
  )
}

export default Footer2