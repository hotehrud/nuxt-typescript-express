export default {
  index: (req, res) => {
    res.status(200).json({ msg: "Hello todos" });
  }
};
