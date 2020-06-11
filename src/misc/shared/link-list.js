//Lazy load all components except the component for root or home
import Portfolio from "../../core/Portfolio/Portfolio";

/**
 * How to use:
 * Adding a menu here automatically adds them to our RoutesList component
 * These objects are simply mapped to a <Route/> component
 * You can pass them to a <Menu linklist={}/> component knowing that the routes are taken care of.
 */

//!Do not delete. This serves as a fallback linklist
export const defaultLinkList = [
  {
    path: "/",
    exact: true,
    component: Portfolio,
    label: "Portfolio"
  }
];

export const getLinkList = () => {
  return defaultLinkList;
};

export const list = [defaultLinkList];
