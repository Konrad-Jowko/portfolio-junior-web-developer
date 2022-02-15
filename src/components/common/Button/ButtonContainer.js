import { connect } from 'react-redux';
import Button from './Button';
import {getMode} from '../../../redux/globalRedux';

const mapStateToProps = (state) => ({
  mode: getMode(state),
});

export default connect(mapStateToProps)(Button);
