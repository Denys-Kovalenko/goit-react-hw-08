import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/filtersSlice";
import { selectFilter } from "../../redux/filters/filtersSelectors";

import css from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        className={css.input}
        placeholder="Enter name"
      />
    </label>
  );
};

export default Filter;
