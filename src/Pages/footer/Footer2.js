import React from "react"
import { NavLink } from "react-router-dom"
import { dataFooter2 } from "../../components/Data"

const Footer2 = ({ title }) => {
  return (
    <>
      <div class="footer-body">
        <h3>{title}</h3>
        {
          dataFooter2.map((data) => {
            return <NavLink to={data.loc}>{data.link}</NavLink>
          })
        }
      </div>
    </>
  )
}

export default Footer2