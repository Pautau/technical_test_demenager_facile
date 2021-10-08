import express, { Request, Response } from "express";
import path from "path";

import {
  readFile,
  getAges,
  getStatistics,
  findByAge,
} from "./repositories/users";

// rest of the code remains same
const app = express();
const PORT = 3000;

// ######### ENGINE #########
// Use the engine of the library pug in order to pass variable to HTML
app.set("view engine", "pug");

// ######### ROUTES #########
//      ### HOMEPAGE ###
// Displays each user contained inside json file: first_name, last_name, age
app.get("/", (req: Request, res: Response) => {
  // Displays home.pug with 2 variables :
  res.render(path.join(__dirname, "views", "home.pug"), {
    title: "Home", // used in order to locate in which page the user is
    users: readFile(path.join(__dirname, "..", "resources", "users.json")),
  }); // the content of the json
});

//      ### STATISTICS ###
// Displays statistics about the age of users: min, max, average and total
app.get("/statistics", (req: Request, res: Response) => {
  // Retrieve the age of all users
  const ages: Array<number> = getAges(
    readFile(path.join(__dirname, "..", "resources", "users.json"))
  );

  // Display the html page with the following informations (see properties)
  res.render(path.join(__dirname, "views", "statistics.pug"), {
    title: "Statistics", // used in order to locate in which page the user is
    ...getStatistics(
      getAges(readFile(path.join(__dirname, "..", "resources", "users.json")))
    ),
  });
});

//      ### AGE ###
app.get("/:age", (req: Request, res: Response) => {
  // Display the html page with the following informations (see properties)
  res.render(path.join(__dirname, "views", "home.pug"), {
    title: "Age", // used in order to locate in which page the user is
    users: findByAge(
      readFile(path.join(__dirname, "..", "resources", "users.json")),
      parseInt(req.params.age)
    ),
  }); // Filter users with a determined age and store in another object
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
