import React, { use } from "react";

const fetchList = fetch("https://retoolapi.dev/9x4S3C/data").then((result) =>
  result.json()
);

const RatingList = () => {
  const listItems = use(fetchList);
  return (
    <>
      {listItems.map((listItem, index) => (
        <web-rating-item key={`list-item-${index}`} fullname={listItem.fullName} stars={listItem.rating} />
      ))}
    </>
  );
};

export default RatingList;
