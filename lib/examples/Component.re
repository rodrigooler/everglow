type state = {
  name: string,
  email: string,
  password: string
}

type action = 
  | GetUser
  | SetUser

let component = ReasonReact.reducerComponent("UserForm");

let reducer = (action, state) => 
  switch action {
  | GetUser => ReasonReact.State({})
  | SetUser => ReasonReact.State({ 
      name: state.name, 
      email: state.email, 
      password: state.password 
    })
  };

let make = (_children) => {
  let getUser = (_event) => GetUser;
  let setUser = (_event) => SetUser;
  {
    ...component,
    initialState: () => { 
      name: "Rodrigo", 
      email: "oler42@fakemail.now", 
      password: "********"
    },
    reducer,
    render: ({state, handle, reduce}) => 
      <p>
        
      </p>
  }
}