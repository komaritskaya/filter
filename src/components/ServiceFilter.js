import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeFilterField,
} from "../actions/actionCreators";

function ServiceFilter() {
  const filter = useSelector(state => state.serviceFilter.filter);
  const dispatch = useDispatch();

  const handleChange = useCallback(
    evt => {
      const { value } = evt.target;
      dispatch(changeFilterField(value));
    },
    [dispatch]
  );

  return (
    <form>
      <label htmlFor="filter">Фильтр: </label>
      <input name="filter" onChange={handleChange} value={filter} />
    </form>
  );
}

export default ServiceFilter;
