import PropTypes from "prop-types";

export default function EmptyFields(value, error) {
  return value === "" && error("Поле не может быть пустым");
}
