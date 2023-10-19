class Person {
  def __init__(self, name):
        self.__id = random.randint(1000, 9999)  # Simulated private field
        self.name = name

    def get_id(self):
        return self.__id
}
getter_access_id = person.get_id()

module.exports = Person;
//Not sure how to fix this 
