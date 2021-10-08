import { expect } from "@jest/globals";
import path from "path";

import {
  readFile,
  getAges,
  getStatistics,
  findByAge,
  getTotalAge,
} from "../src/repositories/users";

let usersDataset: Users;
let emptyUsersDataset: Users;

describe("Test Users function", () => {
  beforeEach(() => {
    usersDataset = readFile(path.join(__dirname, "resources", "test.json"));
    emptyUsersDataset = readFile(
      path.join(__dirname, "resources", "empty.json")
    );
  });
  // Statistics: getAges function
  // Test if the function filter correctly the type of each value of the property "age" that isn't a number
  describe("File can be read", () => {
    it("Should return true", () => {
      expect(usersDataset.length).toEqual(44);
    });
  });
  // Statistics: getAges function
  // Test if the function filter correctly the type of each value of the property "age" that isn't a number
  describe("Statistics: Return an array of numbers only", () => {
    it("Should return true", () => {
      expect(!getAges(usersDataset).some(isNaN)).toEqual(true);
    });
  });

  // Statistics: getTotalAge function
  // Test if it returns 253
  // Because getTotalAge() use getAge() array, it will always be an array of numbers as parameter
  describe("Statistics: Return total age of an array of numbers", () => {
    it("Should return 1989", () => {
      expect(getTotalAge(getAges(usersDataset))).toEqual(1989);
    });

    it("Should not return 1989", () => {
      expect(getTotalAge(getAges(emptyUsersDataset))).not.toEqual(1989);
    });
  });

  // Age: findByAge function
  // Test if it returns 2
  describe('Age: Return every user aged "12" years', () => {
    it("Should return 2 entries", () => {
      expect(findByAge(usersDataset, 12).length).toEqual(2);
    });
  });

  // Age: findByAge function
  // Test if it returns the length of the array
  describe('Age: Return every user aged "un mot" years', () => {
    it("Should return ", () => {
      expect(findByAge(usersDataset, parseInt("un mot")).length).toEqual(
        usersDataset.length
      );
    });
  });

  describe("Statistics : get all", () => {
    it("should return all statistics", () => {
      expect(getStatistics(getAges(usersDataset))).toStrictEqual({
        averageAge: 47,
        highestAge: 97,
        lowestAge: 5,
        totalAge: 1989,
      });
    });
  });
});
