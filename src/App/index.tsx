import { connect } from 'react-redux';
import App from './app';
import { testSaga } from '../About/action';

const mapStateToProps = (state: any) => ({
  test: state.about.name
});

const mapDispatchToProps = (dispatch: any) => ({
  testSaga: (type: string) => {
    console.log('testSaga is connected to App');
    dispatch(testSaga(type));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);