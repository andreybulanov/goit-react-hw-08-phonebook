import { Wrapper, Label, Input } from './Filter.styled';

function Filter({ filter }) {
  const onChange = e => {
    filter(e.target.value);
  };

  return (
    <Wrapper>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input type="text" name="filter" onChange={onChange} />
    </Wrapper>
  );
}

export default Filter;

// Я это оставлю как пример 

// import { useSelector, useDispatch } from 'react-redux';
// import { filter } from '../../Store/filterSlice';
// import { getFilter } from '../../Selectors/contacts-selectors';
// import { Wrapper, Label, Input } from './Filter.styled';

// function Filter() {
//   const dispatch = useDispatch();
//   const value = useSelector((state) => getFilter(state));
//   const onChange = (e) => {
//     dispatch(filter(e.target.value));
//   }

//   return (
//     <Wrapper>
//       <Label htmlFor="filter">Find contacts by name</Label>
//       <Input type="text" name="filter" value={value} onChange={onChange} />
//     </Wrapper>
//   );
// }

// export default Filter;

