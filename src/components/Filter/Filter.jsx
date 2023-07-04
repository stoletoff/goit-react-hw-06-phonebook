import { InputGroup, Label, Input } from './Filter.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selector';
import { setFilter } from 'redux/filterSlice';

const filtrId = nanoid();
export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChangeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };
  return (
    <InputGroup>
      <Label htmlFor={filtrId}>Find contact by name</Label>
      <Input
        type="text"
        name={filter.query}
        onChange={onChangeFilter}
        id={filtrId}
      />
    </InputGroup>
  );
};
