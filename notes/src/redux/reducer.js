// reducer.js
const initialState = {
    notes: []
  };
  
  export const reducer = (state = initialState, action) => {
      switch (action.type) {
          case "ADD_NOTES":
              return {
                  ...state,
                  notes: [...state.notes, action.payload]
              };
          case "DELETE_NOTE":
              // Implement delete logic if needed
              return state;
          case "UPDATE_NOTE":
              // Implement update logic if needed
              return state;
          default:
              return state;
      }
  };
  