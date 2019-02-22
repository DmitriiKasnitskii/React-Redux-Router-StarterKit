import sheetConstants from '../_constants/sheet.constants';

const initState = { count: 1 };

export default function sheetReducer(state = initState, action) {
  switch (action.type) {
    case sheetConstants.INCREASE: {
      return {
        ...state,
        count: state.count + 1
      };
    }
    case sheetConstants.DECREASE: {
      return {
        ...state,
        count: state.count - 1
      };
    }
    default: {
      return state;
    }
  }
}
