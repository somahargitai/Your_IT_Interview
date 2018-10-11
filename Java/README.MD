Java....

#### Java technology branches
- Core Java
- Web - Spring MVC, Struts, JSF, etc.
- ORM - Hibernate, JPA, EclipseLink, etc.
- Database - Oracle, MySQL, etc.
- Microservices - Spring Boot, DropWizard, etc.
- Server - WebSpeher, WebLogic, Tomcat, etc.

https://www.quora.com/How-do-I-get-a-Java-Java-EE-developer-job-when-technical-requirements-are-changing-so-fast

#### Language questions
- What is the difference between Interface vs Abstract class?
- What is the difference between Overloading and Overriding?
- Which runs in Runtime and which in Compile time?
- When do we use the __static__ keyword? Can we use it on a function? On a field? Can we instantiate a static class? Does a static class have a constructor?
- When do we use the abstract classes and interfaces? Can we use them on a function? On a field? Can we instantiate an abstract class? Does an abstract class have a constructor? Can we implement functionality in an interface? How many parent classes/interfaces may a class have? How do we implement an inheritation?
- What is an annotation?
- Which kinds of Collections do you know?
- What is a List and what is an Arraylist? How is Arraylist implemented?
- Tell another List implementation
- What is the difference between ArrayList and LinkedList?
- Which is faster?
- How do we place a new element to its 3rd place in LinkedList / ArrayList?
- How do we delete an element from its 3rd place in LinkedList / ArrayList?
- Is int and object type? Is string an object type?
- When would we use a set? How do we list its elements?
- How does a map checks if it already has that key?
- What is an iterator?
- What is the difference between equals() and == ?
- What can we tell about two Hashcodes of the objects they represent are _true_ for Equals()?
- What can we tell about the result of Equals() of two objects if their Hashcodes are different?
- What can we tell about the result of Equals() of two objects if their Hashcodes are equal?
- How and when do we use Hashcode and Equals?
- How does HashMap work?
- How do we inherit a class from a superclass? How do we connect a class with an interface?, How wo we inherit an interface from an interface? Which keywords do we use in these cases?
- Is _override_ a keyword? How do we use it? Does subclass function override superclass function? What if superclass functions is static?
- What do we use _final_ keyword for?
- Can we reach a function in a subclass which is defined as final/static/private/final static in superclass?
- Can we override a function in a subclass which is defined as final/static/private/final static in superclass?
- May an abstract class can have non-abstract methods?
- How do we exit from a for loop in a for loop?
- Is multiple class inheritance allowed in Java? What is the diamond problem?
- What are the new functionalities in the last Java version?
- What is Marker interface?
- What is Serialization?
- How Serialization is implemented in Java?
- What's the difference between passing by reference and passing by value?
- What is a checked and an unchecked exception in Java?
- What is an Error, how it is different than a Exception?
- How do we implement Threads in Java?
- Which problems occur about Threads and how do we solve them?
- What is a Stream?

[Diamond problem - multiple inheritance](http://www.lambdafaq.org/what-about-the-diamond-problem/)

For loop in a for loop - We can use use double __break__, we can use __return__, we can name the loop and break that loop. Goto is forbidden, break is a bad practice, use return if it is possible

ArrayList - contains an array. Every size increase is applied with creating a new, bigger copy of the array. Class has a strategy to increase the size more than actually necessary (it increases its Array size by 50%), so further element adds won't all need new arrays.  
List, Set - interfaces, not classes  

[Hashcode and Equals](https://dzone.com/articles/working-with-hashcode-and-equals-in-java)  
They are for comparing objects, Object superclass has them. 
For a comparison we use hashcode comparison first. If it results _false_, objects are not equal. If it results _true_, we call _equals()_ to decide if objects are equal are not. Two different objects may have the same hashcode but different hashcodes cannot be made from equals objects.

passing by value vs passing by reference
https://stackoverflow.com/questions/373419/whats-the-difference-between-passing-by-reference-vs-passing-by-value

[override](https://stackoverflow.com/questions/94361/when-do-you-use-javas-override-annotation-and-why) is used to mark overriding a function. If it does not override a function, compiler will warn you.

Java version differencces
https://www.quora.com/What-is-the-main-difference-between-JAVA-SE-7-and-JAVA-SE-8

Marker
https://stackoverflow.com/questions/25850328/marker-interfaces-in-java

HashMap
https://www.geeksforgeeks.org/internal-working-of-hashmap-java/

Stream
https://winterbe.com/posts/2014/07/31/java8-stream-tutorial-examples/

Abstract vs interface
https://stackoverflow.com/questions/18777989/how-should-i-have-explained-the-difference-between-an-interface-and-an-abstract#

#### Java testing questions
- What do you use for Java unit testing?
- How do you unit test a function if it calls a service?
- How do we stub and mock?

https://spring.io/blog/2007/01/15/unit-testing-with-stubs-and-mocks


https://www.edureka.co/blog/interview-questions/java-interview-questions/

#### Java environment questions
- How do we take care of the memory of deleted objects?
- What is JVM?
- What is the difference between Java SE and EE?
- is there 

Java Enterprise and Standard difference:
EE, formerly known as J2EE includes Java Standard Edition plus most of the other Java technologies including JavaMail, Activation, JAXB (Java API for XML Binding), Servlets, JSF (Java Server Faces), JMS (Java Messaging Service), EJB (Enterprise Java Beans), and others.
_[source](https://www.quora.com/What-is-difference-between-core-Java-and-Java-EE)_

JVMs - Zing as an alternative  
https://www.azul.com/products/zing/


Association vs Aggregation vs Composition  
https://beginnersbook.com/2013/05/association/
