import React, { createContext, useState } from "react";

const DatabaseContext = createContext();
let Database = [
  {
    fullName: "Bosede Adeolu",
    email: "bose@gmail.com",
    password: "1234567",
    cPassword: "1234567",
  },
  {
    fullName: "Abosede Adeolu",
    email: "bose+1@gmail.com",
    password: "1234567",
    cPassword: "1234567",
  },
  {
    fullName: "Bose Adeolu",
    email: "bose+2@gmail.com",
    password: "1234567",
    cPassword: "1234567",
  },
];
let Restaurantbase = [
  {
    fullName: "Archive Store",
    email: "store@gmail.com",
    location: "Agbowo",
    password: "1234567",
    cPassword: "1234567",
  },
  {
    fullName: "KFC",
    email: "kfc@gmail.com",
    location: "Ajibode",
    password: "1234567",
    cPassword: "1234567",
  },
];
const DatabaseProvider = ({ children }) => {
  const [database, setDatabase] = useState(Database);
  const [restaurantbase, setRestaurantbase] = useState(Restaurantbase);

  return (
    <DatabaseContext.Provider
      value={{
        database,
        setDatabase,
        restaurantbase,
        setRestaurantbase,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
};

export { DatabaseContext, DatabaseProvider };














