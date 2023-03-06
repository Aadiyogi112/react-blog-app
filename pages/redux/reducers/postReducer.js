export default function counterReducer(state = [], action) {
  switch (action.type) {
    case "INCREASE_COUNTER_BY_ONE":
      return [...state, { ...(action.count + 1) }];
    case "INCREASE_COUNTER_BY_TWO":
      return [...state, { ...(action.count + 2) }];
    case "DECREASE_COUNTER_BY_ONE":
      return [...state, { ...(action.count - 1) }];
    case "DECREASE_COUNTER_BY_TWO":
      return [...state, { ...(action.count - 2) }];
    default:
      return state;
  }
}
