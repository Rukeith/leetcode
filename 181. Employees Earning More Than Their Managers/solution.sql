# Write your MySQL query statement below

SELECT a.Name AS Employee
FROM Employee a
LEFT JOIN
  (SELECT Id,
          Salary
   FROM Employee
   GROUP BY Id) b ON a.ManagerId = b.Id
WHERE a.Salary > b.Salary;