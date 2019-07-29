const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.BASE_URL": prod
    ? "https://portfolio-setup-michael.herokuapp.com"
    : "http://localhost:3000",
  "process.env.NAMESPACE": "https://portfolio-setup-michael.herokuapp.com",
  "process.env.CLIENT_ID": "BcsMUAywbOFA6nP8TK2PVihD20WuMd62"
};
