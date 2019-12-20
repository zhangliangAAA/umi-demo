export default {
  "post /api/login"(req, res, next) {
    const { username, password } = req.body;
    console.log(username, password);
    if (username == "alibaba" && password == "123") {
      return res.json({
        code: 0,
        data: {
          token: "alibabaisgood",
          role: "admin",
          balance: 1000,
          username: "alibaba"
        }
      });
    }
    if (username == "jerry" && password == "123") {
      return res.json({
        code: 0,
        data: {
          token: "alibabaisgood",
          role: "user",
          balance: 100,
          username: "jerry"
        }
      });
    }
    return res.status(401).json({
      code: -1,
      msg: "密码错误"
    });
  }
};
