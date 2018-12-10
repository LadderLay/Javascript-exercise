function Person(name, age)
{
  this.name = name;
  this.age = age;
  this.introduce = function ()
    {
      document.write("I am " + name  + ". I am " + age + " years old!<br>");
    }
}
var jerry = new Person("Jerry", 2);
jerry.introduce();
var tom = new Person("Tom", 12);
tom.introduce();
 