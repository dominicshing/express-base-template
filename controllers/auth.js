// Sign up function
const signUp = (req, res) => {
  const { email, password } = req.body;

  res.status(201).json({ message: 'sign up success' });
};

module.exports = { signUp };
