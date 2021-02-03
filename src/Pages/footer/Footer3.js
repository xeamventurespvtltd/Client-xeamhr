import React from "react"
import { NavLink } from "react-router-dom";
import { dataFooter3 } from "../../components/Data"

const Footer3 = ({ title }) => {
  return (
    <>
      <div class="footer-body">
        <h3>{title}</h3>
        {
          dataFooter3.map((data) => {
            return <NavLink to={data.loc}>{data.link}</NavLink>
          })
        }
      </div>
    </>
  )
}

export default Footer3