///<reference types="react" />

//
// These declares remote modules and the objects they carry.
//

declare module "app1/CounterApp1" {
  const CounterApp1: React.ComponentType;

  export default CounterApp1;
}

declare module "app2/CounterApp2" {
  const CounterApp2: React.ComponentType;

  export default CounterApp2;
}