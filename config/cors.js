export const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://autolead.website",
  "https://showroom.autolead.website",
  "https://alainclass.showroom.autolead.website",
];

export const corOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Origin Not Allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
  credentials: true,
};
