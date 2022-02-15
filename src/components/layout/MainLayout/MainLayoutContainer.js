import { connect } from 'react-redux';
import MainLayout from './MainLayout';
import { getMode, getLoading, getGlobal} from '../../../redux/globalRedux';

const mapStateToProps = (state) => ({
  mode: getMode(state),
  loading: getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  getGlobal: (lang) => dispatch(getGlobal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
