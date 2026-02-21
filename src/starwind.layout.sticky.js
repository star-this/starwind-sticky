// sw-sticky.js
import {
  createStarwindElement,
  defineElement,
} from "./starwind.elements.util.js";

const SwStickyLayout = createStarwindElement({
  top: { var: "--sw-sticky-top", type: "raw" },
  z: { var: "--sw-sticky-z", type: "raw" },
});

export function defineSwSticky() {
  defineElement("sw-sticky", SwStickyLayout);
}
