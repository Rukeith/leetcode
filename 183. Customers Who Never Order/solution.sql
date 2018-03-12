/**
 * 183. Customers Who Never Order
 * Suppose that a website contains two tables, the Customers table and the Orders table. Write a SQL query to find all customers who never order anything.
 * 
 * Table: Customers.
 * +----+-------+
 * | Id | Name  |
 * +----+-------+
 * | 1  | Joe   |
 * | 2  | Henry |
 * | 3  | Sam   |
 * | 4  | Max   |
 * +----+-------+
 * 
 * Table: Orders.
 * +----+------------+
 * | Id | CustomerId |
 * +----+------------+
 * | 1  | 3          |
 * | 2  | 1          |
 * +----+------------+
 * 
 * Using the above tables as example, return the following:
 * +-----------+
 * | Customers |
 * +-----------+
 * | Henry     |
 * | Max       |
 * +-----------+
 * 
 * URL:
 * https://leetcode.com/problems/customers-who-never-order/description/
 */
SELECT Customers.Name AS 'Customers' FROM Customers
WHERE Customers.Id NOT IN (
  SELECT CustomerId FROM Orders
);