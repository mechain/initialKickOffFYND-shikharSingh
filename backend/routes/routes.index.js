const user = require("./routes.user")





module.exports = (app) => {
    app.use('/user',user);
}