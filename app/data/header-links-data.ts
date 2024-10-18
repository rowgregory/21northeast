import { HeaderLinkProps } from "../types/header-types";

const headerLinksData = (path: string): HeaderLinkProps[] => [
  {
    textKey: "Home",
    linkKey: "/",
    active: path === "/",
  },
  {
    textKey: "Meet Our Team",
    linkKey: "/team",
    active: path === "/team",
  },
  {
    textKey: "Listings",
    linkKey: "/listings",
    active: path === "/listings",
  },
  {
    textKey: "Real Estate Services",
    linkKey: "/services",
    active: path === "/services",
  },
];

export default headerLinksData;
