import Image from "next/image";
import React from "react";

const ServiceComponent = (props) => {
  return (
    <>
      <div className="flex-div-for-component-feature">
        {/* width set for component */}
        <div className="width-set-for-feature-component-cc">
          <div className="div-for-header-img-of-the-component">
            <Image
              src={props.icon}
              alt=""
              className="header-img-section-for-the-component-ff"
            />
          </div>
          <div className="contains-all-the-content-of-feature-compnentr">
            <h2 className="title-of-the-component-cc">{props.title}</h2>

            <p className="paragraph-for-the-information-of-the-feature-component">
              {props.para}
            </p>
            <div className="flex-div-contain-buy-now-and-learn-more-link-for-the-component">
              <p>Learn more</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceComponent;
