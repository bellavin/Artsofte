import {useSelector, useDispatch} from 'react-redux';
import {TextField, Select, MenuItem, Button, InputLabel, FormControl} from '@mui/material';
import {setFilterByTimeAction, setFilterByNumAction, setFilterByDurationAction, setPaginationAction} from '../../store/actions';
import {FILTER_BY_TIME_TYPES, FILTER_BY_DURATION_TYPES} from '../../consts';
import {State} from '../../types';

function Filter(): JSX.Element {
  const dispatch = useDispatch();
  const {filterByTimeType, filterByNumType, filterByDurationType} = useSelector((state: State) => state);

  return (
    <div className="filter">
      <ul className="filter__list">
        <li className="filter__item">
          <FormControl>
            <InputLabel id="time-filter-label">Период</InputLabel>
            <Select
              labelId="time-filter-label"
              id="demo-simple-select-helper"
              value={filterByTimeType}
              label="Период"
              onChange={(evt) => {
                dispatch(setFilterByTimeAction(evt.target.value));
                dispatch(setPaginationAction(0));
              }}
            >
              {FILTER_BY_TIME_TYPES.map((item) => (
                <MenuItem
                  key={item.value}
                  value={item.value}
                >
                  {item.text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </li>
        <li className="filter__item">
          <TextField
            id="search"
            label="Номер"
            variant="outlined"
            value={filterByNumType}
            onChange={(evt) => {
              dispatch(setFilterByNumAction(evt.target.value));
              dispatch(setPaginationAction(0));
            }}
          />
        </li>
        <li className="filter__item">
          <FormControl>
            <InputLabel id="duration-filter-label">Длительность</InputLabel>
            <Select
              labelId="duration-filter-label"
              id="duration-filter"
              value={filterByDurationType}
              label="Длительность"
              onChange={(evt) => {
                dispatch(setFilterByDurationAction(evt.target.value));
                dispatch(setPaginationAction(0));
              }}
            >
              {FILTER_BY_DURATION_TYPES.map((item) => (
                <MenuItem
                  key={item.value}
                  value={item.value}
                >
                  {item.text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </li>
        <li className="filter__item">
          <Button
            variant="contained"
            onClick={() => {
              dispatch(setFilterByTimeAction(''));
              dispatch(setFilterByNumAction(''));
              dispatch(setFilterByDurationAction(''));
              dispatch(setPaginationAction(0));
            }}
          >
            Сбросить фильтр
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
