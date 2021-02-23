import React from "react"
import FeatureCard from "../../components/FeatureCard"
import { featureData } from "../Data"


const Features = () => {
  return (
    <>
      <section id="feature" className="feature-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="feature-title mb-4">
                <h1>Key Features</h1>
              </div>
              <div className="row">
                {
                  featureData.map((data, ind) => {
                    return <FeatureCard key={ind}
                      icon={data.icon}
                      title={data.title}
                      para={data.para}
                    />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features