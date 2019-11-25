import React from "react";

import "components/DayListItem.scss"

let classnames = require('classnames');

export default function DayListItem(props) {

  const dayClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0 
  });

  const formatSpots = function() {
    if (props.spots === 0) {
      return "There are no more spots remaining"
    } 
    else if (props.spots === 1) {
      return "There is 1 spot left"
    } 
    else {
      return `${props.spots}`
    }
  }

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className={"text--regular"}>{props.name}</h2> 
      <h3 className={"text--light"}>{formatSpots()}</h3>
    </li>
  );
} 