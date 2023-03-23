const {
  hashPassword,
  matchPassword,
  createToken,
  signup,
} = require("../services/authService");


const { deleteOneUser } = require("../services/deleteService");
const { getSingleUser } = require("../helper/userHelper");




// delete user
const deleteUser = async (req, res) => {
  const { email } = req.body;
  try {
    const delRes = await deleteOneUser({ email });
    if (!delRes) {
      throw Error("B-Delete:User does not exists");
    }
    res.status(200).json({ delRes, redirect: "/login" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await getSingleUser({ email });
    if (!user) {
      throw Error("B-Login: User does not exists");
    }
    const match = await matchPassword(password, user.password);
    if (!match) {
      throw Error("B-Login: Wrong user credentials");
    }
    const token = await createToken(user._id);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// signup user
const signupUser = async (req, res) => {
  const { username, email, password, company } = req.body;

  try {
    const hash = await hashPassword(password);
    const userData = await signup(username, email, hash, company);
    const token = await createToken(userData._id);
    res.status(200).json({ userData, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
  loginUser,
  signupUser,
  deleteUser
};
