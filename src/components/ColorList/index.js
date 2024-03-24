import { onRemove } from '../../actions';
import { ColorList } from './ColorList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    colors: state.colors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemove: (id) => dispatch(onRemove(id)),
  };
};
export default ColorList;
