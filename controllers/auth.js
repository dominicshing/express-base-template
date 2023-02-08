// Sign up function
const signUp = (req, res) => {
  const { email, password } = req.body;

  // If username or password are empty
  if (!email || !password) {
    res.status(400).json({
      process: 'Sign up',
      stage: 'Check if required inputs are filled',
      status: 'failed',
      message: 'Email and password cannot be empty',
    });
  }

  // If username or password are filled
  res.status(200).json({
    process: 'Sign up',
    stage: 'Check if required inputs are filled',
    status: 'success',
    message: 'Email and password are filled',
  });
};

module.exports = { signUp };
