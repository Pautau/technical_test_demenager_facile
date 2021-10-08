import path from "path";
import fs from "fs";

// ######### REQUIRES #########
// Allows to work with file and directories paths
// Try to get the JSON, if it's empty or incorrect return an error. Prevents the application from crashing when the file is empty.
export const readFile = (file: string): Users =>
  JSON.parse(fs.readFileSync(file).toString() || "[]");

// ######### FUNCTIONS #########
//      ### STATISTICS ###
// getAges --> Store all ages inside an array
export const getAges = (json: Users): Array<number> =>
  json.map((user) => user.age).filter((age) => typeof age === "number");

// getTotalAge --> Sum of all ages
export const getTotalAge = (ages: Array<number>): number =>
  ages.reduce((acc, age) => acc + age, 0);

//      ### AGE ###
// findByAge --> Filter users with a determined age and store in another object
export const findByAge = (json: Users, age: number): Users =>
  !isNaN(age) ? json.filter((json) => json.age == age) : json;

export const getStatistics = (ages: Array<number>): UserStatistics => ({
  lowestAge: Math.min(...ages), // lowest age
  highestAge: Math.max(...ages), // highest age
  averageAge: Math.round(getTotalAge(ages) / ages.length), // average age
  totalAge: getTotalAge(ages), // total age
});
