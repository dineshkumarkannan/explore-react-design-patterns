export const FormInitialState = {
  formData: {
    firstName: "",
    lastName: "",
    country: "",
    phone: "",
    currentWorkType: "",
  },
  error: {},
};

export function registerFormReducer(state, action) {
  switch (action.type) {
    case "set_field":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
        error: {
          ...state.error,
          [action.field]: "", // clear the field's error while typing
        },
      };

    case "set_errors":
      return {
        ...state,
        error: {
          ...action.errors,
        },
      };

    case "clear_errors":
      return {
        ...state,
        error: {},
      };

    case "reset":
      return FormInitialState;

    default:
      return state;
  }
}
