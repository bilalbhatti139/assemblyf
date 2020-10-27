import React, { Fragment } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import s from "../../../styles/navbar.module.css";

const CustomDropDown = ({ List, image }) => {
  return (
    <Fragment>
      <div class={s.CustomDropDown}>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            <img
              src={`../../../static/assets/images/${image}`}
              alt="company-logo"
              className="img-fluid"
              width="40"
            />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {List.map((item, index) => {
              return <Dropdown.Item key={index}>{item.title}</Dropdown.Item>;
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Fragment>
  );
};

export default CustomDropDown;
