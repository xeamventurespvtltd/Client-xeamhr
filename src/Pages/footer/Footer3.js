import React from "react"
import { NavLink } from "react-router-dom";
import { dataFooter3 } from "../Data"

const Footer3 = ({ title }) => {
  return (
    <>
      <div className="footer-body">
        <h3>{title}</h3>
        {
          dataFooter3.map((data, ind) => {
            return <NavLink to={data.loc} key={ind}>{data.link}</NavLink>
          })
        }
      </div>
    </>
  )
}

export default Footer3