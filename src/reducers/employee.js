const initialState = {
  loading: false,
  errorMessage: null,
  employees: [
    {
      firstName: "Ujjaval",
      lastName: "Barot",
      gender: "male",
      jobTitle: "Reactjs Developer",
      department: "Developer",
      doj: "18-05-2020",
      location: "Ahmedabad",
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `ADD_EMPLOYEE`: {
      //get menu item from store
      return {
        ...state,
        loading: false,
        employees: [...state.employees, action.payload],
      };
    }
    default:
      return state;
  }
};
