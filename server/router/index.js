const Auth = require("./authRoute");
const Branch = require("./branchRoute");
const Company = require("./companyRoute");
const Generics = require("./genericsRoute");
const Dosages = require("./dosageRoute");
const Medicine = require("./medicineRoute");
const Stock = require("./stockRoute");
const Sell = require("./sellRoute");
module.exports = [
  Auth,
  Branch,
  Company,
  Generics,
  Dosages,
  Medicine,
  Stock,
  Sell,
];
