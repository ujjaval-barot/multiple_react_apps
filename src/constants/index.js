import * as yup from "yup";
let Yup = require("yup");

export const colors = {
  primary: "#007bff",
  invalid: "#dc3545",
  white: "#fff",
};

export const astroidApiKey = "1g4avUyBL7he2QdQOAAbH9yBCPCnbWTlRCa2eyD9";

export const globalSchema = {
  string: (min, max) =>
    Yup.string("Required")
      .min(min ? min : 0, "Too Short!")
      .max(max ? max : 500, "Too Long!")
      .required("Required"),
  email: () =>
    Yup.string("Required").email("Invalid email").required("Required"),
  number: (min, max) =>
    Yup.number("Required")
      .min(min ? min : 0, "Too Short!")
      .max(max ? max : Infinity, "Too Long!")
      .required("Required"),
};

export const reactSelectStyles = {
  menu: (base, state) => ({
    ...base,
    zIndex: 9999,
  }),
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
  control: (base, state) => ({
    ...base,
    minHeight: 38,
    fontSize: 14,
    borderColor: state.isFocused ? colors.primary : base.borderColor,
    boxShadow: null,
    "&:hover": { borderColor: colors.primary, boxShadow: null },
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    padding: 5,
    color: state.isFocused ? colors.primary : base.color,
    "&:hover": { color: colors.primary },
  }),
  option: (base, state) => ({
    ...base,
    background: state.isSelected
      ? "#f7f8fa"
      : state.isFocused
      ? "#f7f8fa"
      : base.background,
    color: state.isFocused
      ? "##595d6e"
      : state.isSelected
      ? "#595d6e"
      : "#595d6e",
    ":active": {
      color: "#595d6e",
      backgroundColor: "#f7f8fa",
    },
    "&:hover": { color: "#595d6e" },
  }),
};

export const reactSelectInvalidStyles = {
  menu: (base, state) => ({
    ...base,
    zIndex: 9999,
  }),
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
  control: (base, state) => ({
    ...base,
    minHeight: 38,
    fontSize: 14,
    borderColor: colors.invalid,
    boxShadow: null,
    "&:hover": { borderColor: colors.invalid, boxShadow: null },
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    padding: 5,
    color: state.isFocused ? colors.primary : base.color,
    "&:hover": { color: colors.primary },
  }),
  option: (base, state) => ({
    ...base,
    background: state.isSelected
      ? "#f7f8fa"
      : state.isFocused
      ? "#f7f8fa"
      : base.background,
    color: state.isFocused
      ? "##595d6e"
      : state.isSelected
      ? "#595d6e"
      : "#595d6e",
    ":active": {
      color: "#595d6e",
      backgroundColor: "#f7f8fa",
    },
    "&:hover": { color: "#595d6e" },
  }),
};
