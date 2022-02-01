import { connect } from 'react-redux';
import MainLayout from './MainLayout';
import { getMode, getLoading, getLanguage} from '../../../redux/globalRedux';

const mapStateToProps = (state) => ({
  mode: getMode(state),
  loading: getLoading(state),
});

export default connect(mapStateToProps)(MainLayout);
