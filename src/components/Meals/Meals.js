/*
 * @Date: 2021-08-30 10:07:29
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-08-30 11:24:48
 * @FilePath: /food-order/src/components/Meals/Meals.js
 */
import { Fragment } from "react";

import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return(
    <Fragment>
      <MealsSummary / >
      <AvailableMeals />
    </Fragment>
  )
}

export default Meals;