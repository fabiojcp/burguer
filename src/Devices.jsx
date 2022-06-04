const sizes = {
  mobileSS: "650px",
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  mobileLL: "460px",
  tablet: "650px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const devices = {
  mobileSS: `(max-width: ${sizes.mobileSS})`,
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  mobileLL: `(min-width: ${sizes.mobileLL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export default devices;
