# Schema Design Fundamentals – Theory

## What is Schema Design and What a Database Schema Represents

Schema design is the process of planning and defining the structure of a database before storing any data. A database schema represents how data is organized in a relational database, including tables, columns, data types, relationships, and constraints. It acts as a blueprint that defines how data is stored and how different pieces of data relate to each other.

## Why Schema Design is Required Before Writing Backend Code

Schema design is required before writing backend code because the backend depends on the database structure to store, retrieve, and update data correctly. If the schema is not well designed, backend code may become complex, error-prone, and inefficient. A clear schema helps developers write cleaner queries, reduce bugs, and ensure smooth interaction between the application and the database.

## Impact of Poor Schema Design

Poor schema design can negatively affect data consistency, maintenance, and scalability. It may lead to duplicated data, update anomalies, and inconsistent records. Maintenance becomes difficult because changes in one place may require changes in multiple tables. Scalability is affected because inefficient table structures and relationships slow down queries as data grows.

## Validations in Schema Design and Why Databases Enforce Them

Validations are rules applied to database columns to ensure data integrity. Databases enforce validations to prevent invalid or incorrect data from being stored.
Examples include:
- **NOT NULL**: Ensures a column cannot have empty values
- **UNIQUE**: Ensures all values in a column are different
- **DEFAULT**: Assigns a default value if none is provided
- **PRIMARY KEY**: Uniquely identifies each row in a table

These validations help maintain accurate and reliable data.

## Difference Between a Database Schema and a Database Table

A database schema is the overall structure that defines tables, relationships, and constraints within a database. A database table is a single component within the schema that stores data in rows and columns. In simple terms, the schema is the blueprint, and tables are the actual containers for data.

## Why a Table Should Represent Only One Entity

A table should represent only one entity to maintain clarity and normalization. For example, a `Students` table should only store student-related information. Mixing multiple entities in one table leads to redundancy and data anomalies, making updates and maintenance difficult.

## Why Redundant or Derived Data Should Be Avoided

Redundant data is repeated data, and derived data is data that can be calculated from other fields. Both should be avoided because they increase storage usage and can cause inconsistencies. For example, storing both date of birth and age is unnecessary since age can be calculated from date of birth.

## Importance of Choosing Correct Data Types

Choosing correct data types ensures efficient storage, better performance, and data accuracy. For example, using `INT` for numeric values and `DATE` for dates prevents invalid data entries and reduces memory usage. Proper data types also help databases optimize queries and validations.
