const fs = require("fs");
const parser = require("@babel/parser");

export interface Root {
    type: string;
    start: number;
    end: number;
    loc: Loc;
    errors: any[];
    program: Program;
    comments: any[];
  }
  
  export interface Loc {
    start: Start;
    end: End;
  }
  
  export interface Start {
    line: number;
    column: number;
  }
  
  export interface End {
    line: number;
    column: number;
  }
  
  export interface Program {
    type: string;
    start: number;
    end: number;
    loc: Loc2;
    sourceType: string;
    interpreter: any;
    body: Body[];
    directives: any[];
  }
  
  export interface Loc2 {
    start: Start2;
    end: End2;
  }
  
  export interface Start2 {
    line: number;
    column: number;
  }
  
  export interface End2 {
    line: number;
    column: number;
  }
  
  export interface Body {
    type: string;
    start: number;
    end: number;
    loc: Loc3;
    specifiers?: Specifier[];
    source?: Source;
    declaration?: Declaration;
  }
  
  export interface Loc3 {
    start: Start3;
    end: End3;
  }
  
  export interface Start3 {
    line: number;
    column: number;
  }
  
  export interface End3 {
    line: number;
    column: number;
  }
  
  export interface Specifier {
    type: string;
    start: number;
    end: number;
    loc: Loc4;
    local: Local;
    imported?: Imported;
  }
  
  export interface Loc4 {
    start: Start4;
    end: End4;
  }
  
  export interface Start4 {
    line: number;
    column: number;
  }
  
  export interface End4 {
    line: number;
    column: number;
  }
  
  export interface Local {
    type: string;
    start: number;
    end: number;
    loc: Loc5;
    name: string;
  }
  
  export interface Loc5 {
    start: Start5;
    end: End5;
    identifierName: string;
  }
  
  export interface Start5 {
    line: number;
    column: number;
  }
  
  export interface End5 {
    line: number;
    column: number;
  }
  
  export interface Imported {
    type: string;
    start: number;
    end: number;
    loc: Loc6;
    name: string;
  }
  
  export interface Loc6 {
    start: Start6;
    end: End6;
    identifierName: string;
  }
  
  export interface Start6 {
    line: number;
    column: number;
  }
  
  export interface End6 {
    line: number;
    column: number;
  }
  
  export interface Source {
    type: string;
    start: number;
    end: number;
    loc: Loc7;
    extra: Extra;
    value: string;
  }
  
  export interface Loc7 {
    start: Start7;
    end: End7;
  }
  
  export interface Start7 {
    line: number;
    column: number;
  }
  
  export interface End7 {
    line: number;
    column: number;
  }
  
  export interface Extra {
    rawValue: string;
    raw: string;
  }
  
  export interface Declaration {
    type: string;
    start: number;
    end: number;
    loc: Loc8;
    id: Id;
    generator: boolean;
    async: boolean;
    params: any[];
    body: Body2;
  }
  
  export interface Loc8 {
    start: Start8;
    end: End8;
  }
  
  export interface Start8 {
    line: number;
    column: number;
  }
  
  export interface End8 {
    line: number;
    column: number;
  }
  
  export interface Id {
    type: string;
    start: number;
    end: number;
    loc: Loc9;
    name: string;
  }
  
  export interface Loc9 {
    start: Start9;
    end: End9;
    identifierName: string;
  }
  
  export interface Start9 {
    line: number;
    column: number;
  }
  
  export interface End9 {
    line: number;
    column: number;
  }
  
  export interface Body2 {
    type: string;
    start: number;
    end: number;
    loc: Loc10;
    body: Body3[];
    directives: any[];
  }
  
  export interface Loc10 {
    start: Start10;
    end: End10;
  }
  
  export interface Start10 {
    line: number;
    column: number;
  }
  
  export interface End10 {
    line: number;
    column: number;
  }
  
  export interface Body3 {
    type: string;
    start: number;
    end: number;
    loc: Loc11;
    declarations?: Declaration2[];
    kind?: string;
    argument?: Argument2;
  }
  
  export interface Loc11 {
    start: Start11;
    end: End11;
  }
  
  export interface Start11 {
    line: number;
    column: number;
  }
  
  export interface End11 {
    line: number;
    column: number;
  }
  
  export interface Declaration2 {
    type: string;
    start: number;
    end: number;
    loc: Loc12;
    id: Id2;
    init: Init;
  }
  
  export interface Loc12 {
    start: Start12;
    end: End12;
  }
  
  export interface Start12 {
    line: number;
    column: number;
  }
  
  export interface End12 {
    line: number;
    column: number;
  }
  
  export interface Id2 {
    type: string;
    start: number;
    end: number;
    loc: Loc13;
    elements?: Element[];
    properties?: Property[];
  }
  
  export interface Loc13 {
    start: Start13;
    end: End13;
  }
  
  export interface Start13 {
    line: number;
    column: number;
  }
  
  export interface End13 {
    line: number;
    column: number;
  }
  
  export interface Element {
    type: string;
    start: number;
    end: number;
    loc: Loc14;
    name: string;
  }
  
  export interface Loc14 {
    start: Start14;
    end: End14;
    identifierName: string;
  }
  
  export interface Start14 {
    line: number;
    column: number;
  }
  
  export interface End14 {
    line: number;
    column: number;
  }
  
  export interface Property {
    type: string;
    start: number;
    end: number;
    loc: Loc15;
    method: boolean;
    key: Key;
    computed: boolean;
    shorthand: boolean;
    value: Value;
    extra: Extra2;
  }
  
  export interface Loc15 {
    start: Start15;
    end: End15;
  }
  
  export interface Start15 {
    line: number;
    column: number;
  }
  
  export interface End15 {
    line: number;
    column: number;
  }
  
  export interface Key {
    type: string;
    start: number;
    end: number;
    loc: Loc16;
    name: string;
  }
  
  export interface Loc16 {
    start: Start16;
    end: End16;
    identifierName: string;
  }
  
  export interface Start16 {
    line: number;
    column: number;
  }
  
  export interface End16 {
    line: number;
    column: number;
  }
  
  export interface Value {
    type: string;
    start: number;
    end: number;
    loc: Loc17;
    name: string;
  }
  
  export interface Loc17 {
    start: Start17;
    end: End17;
    identifierName: string;
  }
  
  export interface Start17 {
    line: number;
    column: number;
  }
  
  export interface End17 {
    line: number;
    column: number;
  }
  
  export interface Extra2 {
    shorthand: boolean;
  }
  
  export interface Init {
    type: string;
    start: number;
    end: number;
    loc: Loc18;
    callee?: Callee;
    arguments?: Argument[];
    name?: string;
  }
  
  export interface Loc18 {
    start: Start18;
    end: End18;
    identifierName?: string;
  }
  
  export interface Start18 {
    line: number;
    column: number;
  }
  
  export interface End18 {
    line: number;
    column: number;
  }
  
  export interface Callee {
    type: string;
    start: number;
    end: number;
    loc: Loc19;
    name: string;
  }
  
  export interface Loc19 {
    start: Start19;
    end: End19;
    identifierName: string;
  }
  
  export interface Start19 {
    line: number;
    column: number;
  }
  
  export interface End19 {
    line: number;
    column: number;
  }
  
  export interface Argument {
    type: string;
    start: number;
    end: number;
    loc: Loc20;
    properties: Property2[];
    extra: Extra4;
  }
  
  export interface Loc20 {
    start: Start20;
    end: End20;
  }
  
  export interface Start20 {
    line: number;
    column: number;
  }
  
  export interface End20 {
    line: number;
    column: number;
  }
  
  export interface Property2 {
    type: string;
    start: number;
    end: number;
    loc: Loc21;
    method: boolean;
    key: Key2;
    computed: boolean;
    shorthand: boolean;
    value: Value2;
  }
  
  export interface Loc21 {
    start: Start21;
    end: End21;
  }
  
  export interface Start21 {
    line: number;
    column: number;
  }
  
  export interface End21 {
    line: number;
    column: number;
  }
  
  export interface Key2 {
    type: string;
    start: number;
    end: number;
    loc: Loc22;
    name: string;
  }
  
  export interface Loc22 {
    start: Start22;
    end: End22;
    identifierName: string;
  }
  
  export interface Start22 {
    line: number;
    column: number;
  }
  
  export interface End22 {
    line: number;
    column: number;
  }
  
  export interface Value2 {
    type: string;
    start: number;
    end: number;
    loc: Loc23;
    extra: Extra3;
    value: string;
  }
  
  export interface Loc23 {
    start: Start23;
    end: End23;
  }
  
  export interface Start23 {
    line: number;
    column: number;
  }
  
  export interface End23 {
    line: number;
    column: number;
  }
  
  export interface Extra3 {
    rawValue: string;
    raw: string;
  }
  
  export interface Extra4 {
    trailingComma: number;
  }
  
  export interface Argument2 {
    type: string;
    start: number;
    end: number;
    loc: Loc24;
    openingElement: OpeningElement;
    closingElement: ClosingElement;
    children: Children[];
    extra: Extra6;
  }
  
  export interface Loc24 {
    start: Start24;
    end: End24;
  }
  
  export interface Start24 {
    line: number;
    column: number;
  }
  
  export interface End24 {
    line: number;
    column: number;
  }
  
  export interface OpeningElement {
    type: string;
    start: number;
    end: number;
    loc: Loc25;
    name: Name;
    attributes: any[];
    selfClosing: boolean;
  }
  
  export interface Loc25 {
    start: Start25;
    end: End25;
  }
  
  export interface Start25 {
    line: number;
    column: number;
  }
  
  export interface End25 {
    line: number;
    column: number;
  }
  
  export interface Name {
    type: string;
    start: number;
    end: number;
    loc: Loc26;
    name: string;
  }
  
  export interface Loc26 {
    start: Start26;
    end: End26;
  }
  
  export interface Start26 {
    line: number;
    column: number;
  }
  
  export interface End26 {
    line: number;
    column: number;
  }
  
  export interface ClosingElement {
    type: string;
    start: number;
    end: number;
    loc: Loc27;
    name: Name2;
  }
  
  export interface Loc27 {
    start: Start27;
    end: End27;
  }
  
  export interface Start27 {
    line: number;
    column: number;
  }
  
  export interface End27 {
    line: number;
    column: number;
  }
  
  export interface Name2 {
    type: string;
    start: number;
    end: number;
    loc: Loc28;
    name: string;
  }
  
  export interface Loc28 {
    start: Start28;
    end: End28;
  }
  
  export interface Start28 {
    line: number;
    column: number;
  }
  
  export interface End28 {
    line: number;
    column: number;
  }
  
  export interface Children {
    type: string;
    start: number;
    end: number;
    loc: Loc29;
    extra?: Extra5;
    value?: string;
    expression?: Expression;
  }
  
  export interface Loc29 {
    start: Start29;
    end: End29;
  }
  
  export interface Start29 {
    line: number;
    column: number;
  }
  
  export interface End29 {
    line: number;
    column: number;
  }
  
  export interface Extra5 {
    rawValue: string;
    raw: string;
  }
  
  export interface Expression {
    type: string;
    start: number;
    end: number;
    loc: Loc30;
    name: string;
  }
  
  export interface Loc30 {
    start: Start30;
    end: End30;
    identifierName: string;
  }
  
  export interface Start30 {
    line: number;
    column: number;
  }
  
  export interface End30 {
    line: number;
    column: number;
  }
  
  export interface Extra6 {
    parenthesized: boolean;
    parenStart: number;
  }
  

const convertJSXToReasonML = jsx => {
  const ast = parser.parse(`import React, { useState } from 'react'

    export default function UserForm() {
        const [state] = useState({
            name: 'Rodrigo',
            email: 'oler42@fakemail.now',
            password: '**********',
        })

        const {name, email, password} = state;

        return (
            <p>
                {name}
                {email}
                {password}
            </p>
        )
    }
`,
    {
      sourceType: "module",
      plugins: [
          "jsx"
      ]
    }
  );
  fs.writeFileSync(
    "./lib/examples/Component.ast.json",
    JSON.stringify(ast, null, 2),
    () => {}
  );
  fs.writeFileSync(
    "./lib/examples/Component.re",
    JSON.stringify(ast, null, 2),
    () => {}
  );
};

const convertJSXStateToReasonMLState = (ast: Root) => {
    const state = ast.program.body.
}

(() => {
  convertJSXToReasonML();
  convertJSXStateToReasonMLState();
})();
