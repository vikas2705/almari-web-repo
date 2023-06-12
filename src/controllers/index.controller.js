export const serverIndexFile = (req, res) => {
  res.render("index", { email: null });
};
export const serverPrivacyPolicy = (req, res) => {
  res.render("privacy-policy");
};
export const serverTerms = (req, res) => {
  res.render("terms");
};
export const serverFaqs = (req, res) => {
  res.render("faqs");
};
