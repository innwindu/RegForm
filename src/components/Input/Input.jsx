import PropTypes from "prop-types";
import styles from "./Input.module.css";
import useInput from "../../hooks/useInput";

export default function Input(props) {
  const { type, placeholder, value, onChange, error } = props;

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div className={styles.errors}>{error}</div>
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};
