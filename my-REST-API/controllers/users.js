import User from "../models/User.js";

export const getAllUsersController = async (req, res) => {
  try {
    const { name, email, sort, select, age } = req.query;
    const queryObject = {};

    if (name) {
      queryObject.name = { $regex: name, $options: "i" };
    }

    if (email) {
      queryObject.email = { $regex: email, $options: "i" };
    }

    if (age) {
      queryObject.age = age;
    }

    let apiData = User.find(queryObject);

    if (sort) {
      let sortFix = sort.split(",").join(" ");
      apiData = apiData.sort(sortFix);
    }

    if (select) {
      let selectFix = select.split(",").join(" ");
      apiData = apiData.select(selectFix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;
    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit);

    const data = await apiData;
    res.status(200).json({ data, nbHits: data.length });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUserController = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const addUserController = async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
