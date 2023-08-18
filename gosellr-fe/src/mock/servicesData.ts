import consultantBanner from "../assets/raw/consultant.png";
import userIcon from "../assets/raw/userIconOne.svg";

import plumberIcon from "../assets/raw/plumber.png";
import plumberBanner from "../assets/raw/plumberBanner.png";

import driverIcon from "../assets/raw/driver.png";
import driverBanner from "../assets/raw/driverBanner.png";

export const servicesPageData = [
  {
    id: "1",
    serviceBanner: consultantBanner,
    userDetails: {
      userIcon: userIcon,
      userName: "Willam Marks",
      userProfileRatings: "4.5",
      userProfileLevel: "7",
    },
    serviceDiscription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quis, necessitatibus nobis sequi eius dolores, molestiae dolorum quia cum labore suscipit. Quia voluptate, illum placeat quibusdam beatae sit quis eaque",
    serviceLabel: "Consultant",
    isSponsor: true,
    sponsorDetails: {
      companyName:'Arrow cod',
    }
    
  },
  {
    id: "2",
    serviceBanner: plumberBanner,
    userDetails: {
      userIcon: plumberIcon,
      userName: "Jhon Max",
      userProfileRatings: "4.1",
      userProfileLevel: "6",
    },
    serviceDiscription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quis, necessitatibus nobis sequi eius dolores, molestiae dolorum quia cum labore suscipit. Quia voluptate, illum placeat quibusdam beatae sit quis eaque",
    serviceLabel: "Plumber",
    isSponsor: false,
  },
  {
    id: "3",
    serviceBanner: driverBanner,
    userDetails: {
      userIcon: driverIcon,
      userName: "Ethan Thompson",
      userProfileRatings: "3.1",
      userProfileLevel: "5",
    },
    serviceDiscription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quis, necessitatibus nobis sequi eius dolores, molestiae dolorum quia cum labore suscipit. Quia voluptate, illum placeat quibusdam beatae sit quis eaque",
    serviceLabel: "Diiver",
    isSponsor: true,
  },
  {
    id: "4",
    serviceBanner: consultantBanner,
    userDetails: {
      userIcon: userIcon,
      userName: "Willam Marks",
      userProfileRatings: "4.5",
      userProfileLevel: "7",
    },
    serviceDiscription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quis, necessitatibus nobis sequi eius dolores, molestiae dolorum quia cum labore suscipit. Quia voluptate, illum placeat quibusdam beatae sit quis eaque",
    serviceLabel: "Consultant",
    isSponsor: true,

  },
  {
    id: "5",
    serviceBanner: plumberBanner,
    userDetails: {
      userIcon: plumberIcon,
      userName: "Jhon Max",
      userProfileRatings: "4.1",
      userProfileLevel: "6",
    },
    serviceDiscription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quis, necessitatibus nobis sequi eius dolores, molestiae dolorum quia cum labore suscipit. Quia voluptate, illum placeat quibusdam beatae sit quis eaque",
    serviceLabel: "Plumber",
    isSponsor: false,
  },
];
