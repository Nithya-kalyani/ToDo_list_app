/**
 * @author Nithya
 * @email nithya@crayond.co
 * @create 26/02/2022
 * @modify 27/02/2022
 * @description Overall Context for app
 */
import React from "react";

export let toDoList = [
  {
    id: 1,
    subject: "Task1",
    createdAt: "25-02-2022 01:15 pm",
  },
  {
    id: 2,
    subject: "Task2",
    createdAt: "26-02-2022 11:00 am",
  },
  {
    id: 3,
    subject: "Task3",
    createdAt: "27-02-2022 9:57 am",
  },
];

export let toDoListContext = React.createContext(toDoList);
