import React from "react";
import PropTypes from "prop-types";
import { RatingContainer, RatingName, RatingStars } from "./styled";

const RatingItem = (props) => {
  const { fullname, stars } = props;
  return (
    <RatingContainer>
      <RatingName>{fullname}</RatingName>
      <RatingStars>{stars}</RatingStars>
    </RatingContainer>
  );
};

RatingItem.propTypes = {
  fullname: PropTypes.string.isRequired,
  stars: PropTypes.string.isRequired,
};

export default RatingItem;
