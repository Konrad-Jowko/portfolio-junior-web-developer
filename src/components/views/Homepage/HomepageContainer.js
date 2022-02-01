import { connect } from 'react-redux';
import Homepage from './Homepage';
import { getMode, getLanguage } from '../../../redux/globalRedux';
import { getPL, getENG } from '../../../redux/homepageRedux';

const mapStateToProps = (state) => ({
  mode: getMode(state),
  language: getLanguage(state),
  contentPL: getPL(state),
  contentENG: getENG(state),
});

export default connect(mapStateToProps)(Homepage);
