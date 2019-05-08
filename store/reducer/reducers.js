const RenderList = (state = {}, action) => {
  switch (action.type) {
    case "VIEW_LIST":
      return action.payload;

    default:
      return state;
  }
};
export default RenderList;
