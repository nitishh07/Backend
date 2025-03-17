// let figlet = require("figlet"); //package ke liye ./ ni likhna pdta hai
import figlet from "figlet";
figlet("Hello World!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });