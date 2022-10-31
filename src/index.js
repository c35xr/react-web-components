import React from "react";
import * as ReactDOMClient from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";

import Counter from "./components/Counter";
import Button from "./components/Button";
import RatingList from "./components/RatingList";
import RatingItem from "./components/RatingItem";

const WebCounter = reactToWebComponent(Counter, React, ReactDOMClient);
const WebButton = reactToWebComponent(Button, React, ReactDOMClient);
const WebRatingItem = reactToWebComponent(RatingItem, React, ReactDOMClient);
const WebRatingList = reactToWebComponent(RatingList, React, ReactDOMClient);

customElements.define("web-counter", WebCounter);
customElements.define("web-button", WebButton);
customElements.define("web-rating-list", WebRatingList);
customElements.define("web-rating-item", WebRatingItem);
