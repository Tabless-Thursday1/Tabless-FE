import { filterObject } from './filterObject';

export const buildMapStateToProps = ({ propsShape }) => (state) => filterObject({
  sourceObject: state,
  filter: propsShape,
});

export default buildMapStateToProps;
