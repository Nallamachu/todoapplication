# ToDoList
Simple ToDolist with ability to add collaborators to ToDos. 
Every todo or task can have description up to 255 characters. 
All actions are secured i.e. basic operations with tasks or todos can be performed only by owner of the todo, some operations can be performed by collaborators.

Technology stack:
- Java 17
- Lombok
- Slf4j
- Spring Boot 2.7
- Spring Security 5
- Thymeleaf template engine
- Bootstrap 3
- Spring Web
- Spring Data JPA 
- Hibernate ORM
- MYSQL (production db)
- JUnit, Mockito


## Steps to set up this application:
1. Execute the below script to insert Roles and States information.
```sql
INSERT INTO roles (id, name) VALUES (1, 'ADMIN');
INSERT INTO roles (id, name) VALUES (2, 'USER');

INSERT INTO states (id, name) VALUES (5, 'New');
INSERT INTO states (id, name) VALUES (6, 'Doing');
INSERT INTO states (id, name) VALUES (7, 'Verify');
INSERT INTO states (id, name) VALUES (8, 'Done');
```
2. Register as a User from register form and then login into application to create your own Todos.
