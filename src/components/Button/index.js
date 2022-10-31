import React from "react";
import PropTypes from "prop-types"
import { ButtonStyled } from "./styled";

const Button = (props) => {
  const { onClick, name } = props;
  return <ButtonStyled onClick={onClick}>{name}</ButtonStyled>;
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Button;
