export const earlyAccessregister = async (req, res) => {
  const { email } = req.body;
  res.status(201).render("index", { email });
};
