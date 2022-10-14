import { Item } from "../model"; // we need to import the type


import React, { useState } from "react";

export default function TodoList() {

  // note the <Item[]> syntax!

  const [list, setList] = useState<Item[]>([

    {

      id: 0,

      text: "Make this app",

      tags: ["react", "typescript"],

      isDone: false,

    },

    {

      id: 1,

      text: "Fall in love with TypeScript",

      tags: ["romantic", "typescript"],

      isDone: false,

    },

  ]);


  return <p>TODO: make the TODO app</p>;

}