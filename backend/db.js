const mongoose = require("mongoose");

const username = process.env.REACT_APP_USER_NAME;
const password = process.env.REACT_APP_PASSWORD;

const mongoURI = `mongodb+srv://abhi:2n4nvrfvHdjQMhJF@inotebook.vg06nrm.mongodb.net/?retryWrites=true&w=majority`

// to remove this warning
// [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
// (Use `node --trace-deprecation ...` to show where the warning was created)
mongoose.set("strictQuery", false);

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Database successfully...");
  });
};

module.exports = connectToMongo;
