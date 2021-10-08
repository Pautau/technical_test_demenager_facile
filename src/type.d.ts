// ######### TYPES #########
// Creation of types Users and User in order to use the json properly
type Users = Array<User>;
type User = {
  first_name: string;
  last_name: string;
  age: number;
};

type UserStatistics = {
  lowestAge: number;
  highestAge: number;
  averageAge: number;
  totalAge: number;
};
