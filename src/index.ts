export class Person {
  private name = 'Stéphano'
  getName = () => this.name
  setName = (name: string) => { this.name = name }
}

export let person = new Person()
