export const buildMapStateToProps = ({ propsShape }) => (state) => (Object
  .keys(propsShape)
  .reduce((acc, key) => {
    acc[key] = state[key];
    return acc;
  }, {})
);

export default buildMapStateToProps;
