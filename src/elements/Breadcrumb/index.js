import React from "react"

import propTypes from 'prop-types'
import Button from "elements/Button"

import './index.scss'

export default function Breadcrumb(props) {
  const className = ["breadcrumb", props.className];

  const handleItemClick = (index) => {
    const { data } = props;
    if (index === 0 && data && data.length > 0 && data[index].pageHref) {
      window.location.href = data[index].pageHref;
    }
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className={className.join(" ")}>
        {props.data?.map((item, index) => {
          return (
            <li
              key={`breadcrumb-${index}`}
              className={`breadcrumb-item${index === props.data.length - 1 ? " active" : ""}`}
              onClick={() => handleItemClick(index)}
            >
              {index === props.data.length - 1 ? (
                item.pageTitle
              ) : (
                <Button type="link" href={item.pageHref}>
                  {item.pageTitle}
                </Button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

Breadcrumb.propTypes = {
  data: propTypes.array,
  className: propTypes.string
}