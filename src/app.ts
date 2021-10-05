import express, { Request, Response } from "express";
import { cp } from "fs";
import { type } from "os";
import internal from "stream";

// rest of the code remains same
const app = express();
const PORT = 3000;

// ######### TYPES #########
// Creation of types Users and User in order to use the json properly
type Users = Array<User>;
type User = {
  first_name: string;
  last_name: string;
  age: number;
};

// ######### REQUIRES #########
// Allows to work with file and directories paths
const path = require("path");
// Try to get the JSON, if it's empty or incorrect return an error. Prevents the application from crashing when the file is empty.
try {
  var json: Users = require("./resources/users.json");
} catch (error) {
  var json: Users = [
    {
      first_name: "File empty or incorrect",
      last_name: "File empty or incorrect",
      age: 404,
    },
  ];
}

// ######### ENGINE #########
// Use the engine of the library pug in order to pass variable to HTML
app.set("view engine", "pug");

// ######### ROUTES #########
//      ### HOMEPAGE ###
// Displays each user contained inside json file: first_name, last_name, age
app.get("/", (req: Request, res: Response) => {
  // Displays home.pug with 2 variables :
  res.render(path.join(__dirname + "/views/home.pug"), {
    title: "Home", // used in order to locate in which page the user is
    users: json,
  }); // the content of the json
});

//      ### STATISTICS ###
// Displays statistics about the age of users: min, max, average and total
app.get("/statistics", (req: Request, res: Response) => {
  // Retrieve the age of all users
  const ages: Array<number> = getAges(json);

  // Display the html page with the following informations (see properties)
  res.render(path.join(__dirname + "/views/statistics.pug"), {
    title: "Statistics", // used in order to locate in which page the user is
    lowestAge: Math.min(...ages), // lowest age
    highestAge: Math.max(...ages), // highest age
    averageAge: Math.round(getTotalAge(ages) / ages.length), // average age
    totalAge: getTotalAge(ages), // total age
  });
});

//      ### AGE ###
app.get("/:age", (req: Request, res: Response) => {
  // Display the html page with the following informations (see properties)
  res.render(path.join(__dirname + "/views/home.pug"), {
    title: "Age", // used in order to locate in which page the user is
    users: findByAge(json, req.params.age),
  }); // Filter users with a determined age and store in another object
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

// ######### FUNCTIONS #########
//      ### STATISTICS ###
// getAges --> Store all ages inside an array
const getAges = (json: Users) => {
  const ages: Array<number> = [];
  for (const user in json) {
    ages.push(json[user].age);
  }

  // Return a filtered array of number, if an age wasn't a number filter it
  return ages.filter((age) => typeof age === "number");
};

// getTotalAge --> Sum of all ages
const getTotalAge = (ages: Array<number>) => {
  let totalAge: number = 0;
  for (let i = 0; i < ages.length; i++) {
    totalAge += ages[i];
  }
  return totalAge;
};

//      ### AGE ###
// findByAge --> Filter users with a determined age and store in another object
const findByAge = (json: Users, query: string) => {
  const age: number = parseInt(query);
  if (isNaN(age)) {
    // If the get parameter is not a number, display without filtering.
    return json;
  } else {
    // Otherwise, filter it by the parameter
    return json.filter((json) => json.age == age);
  }
};

// ######### EXPORT #########
// used in beginner-test.test.ts for unit testing
module.exports = {
  getTotalAge,
  getAges,
  findByAge,
};
