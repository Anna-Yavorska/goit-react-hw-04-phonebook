import { FilterWrapper } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <FilterWrapper>
      Find contacts by name
      <input
        name="filter"
        type="text"
        value={filter}
        onChange={evt => onChange(evt.target.value)}
      />
    </FilterWrapper>
  );
};
