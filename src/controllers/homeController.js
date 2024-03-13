const getHomepage = (req, res) => {
  res.send("Hello World! Hoang Van Duc");
};

const getABC = (req, res) => {
    res.send("Check ABC");
}

const getTest = (req, res) => {
    res.render("sample.ejs");
}

module.exports = {
    getHomepage, getABC, getTest
}