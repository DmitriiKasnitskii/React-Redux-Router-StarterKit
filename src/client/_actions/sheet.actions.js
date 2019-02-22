import sheetConstants from '../_constants/sheet.constants';

const increase = () => (dispatch) => {
  dispatch({
    type: sheetConstants.INCREASE
  });
};

const decrease = () => (dispatch) => {
  dispatch({
    type: sheetConstants.DECREASE
  });
};

export default {
  increase,
  decrease
};
