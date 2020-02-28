const acorn = require("acorn");
const fs = require("fs");

const convertJSXToReasonML = jsx => {
  const ast = acorn.parse(`import React, { useState } from 'react';

  export default function UserForm() {
      const [state] = useState({
          name: 'Rodrigo',
          email: 'oler42@fakemail.now',
          password: '**********',
      });
  
      const {name, email, password} = state;
  
      return (
          <p>
              {name}
              {email}
              {password}
          </p>
      )
  }`);
  fs.writeFileSync("./jsx.ast.json", ast, () => {});
};

(() => {
  convertJSXToReasonML();
})();
