export const RenderList = user => {
  console.log("Checking", user);

  return {
    type: "VIEW_LIST",
    payload: user
  };
};
