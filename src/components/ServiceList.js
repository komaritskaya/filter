import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeService, editService } from "../actions/actionCreators";

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const filter = useSelector(state => state.serviceFilter.filter);
  const dispatch = useDispatch();

  const filteredItems = filter ? items.filter(item => item.name.startsWith(filter.toLowerCase())) : items;

  const handleRemove = useCallback(
    id => {
      dispatch(removeService(id));
    },
    [dispatch]
  );

  const handleEdit = useCallback(
    (id, name, price) => {
      dispatch(editService(id, name, price));
    },
    [dispatch]
  );

  return (
    <ul>
      {filteredItems.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleRemove(o.id)}>Remove</button>
          <button onClick={() => handleEdit(o.id, o.name, o.price)}>
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList;
