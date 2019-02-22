import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import sheetActions from './_actions/sheet.actions';
import './app.scss';

const App = (props) => {
  const { count, increase, decrease } = props;

  return (
    <div className="scene">
      <button onClick={decrease} type="button">-</button>
      <div style={{
        margin: '0 10px'
      }}
      >
        {count}
      </div>
      <button onClick={increase} type="button">+</button>
    </div>
  );
};

App.propTypes = {
  count: PropTypes.number,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired
};

App.defaultProps = {
  count: 1
};

const mapDispatchToProps = dispatch => ({
  increase: () => dispatch(sheetActions.increase()),
  decrease: () => dispatch(sheetActions.decrease())
});

const mapStateToProps = (state) => {
  const { count } = state.sheetReducer;

  return {
    count
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
