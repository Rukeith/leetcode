/**
 * 181. Employees Earning More Than Their Managers
 * The Employee table holds all employees including their managers. Every employee has an Id, and there is also a column for the manager Id.
 * +----+-------+--------+-----------+
 * | Id | Name  | Salary | ManagerId |
 * +----+-------+--------+-----------+
 * | 1  | Joe   | 70000  | 3         |
 * | 2  | Henry | 80000  | 4         |
 * | 3  | Sam   | 60000  | NULL      |
 * | 4  | Max   | 90000  | NULL      |
 * +----+-------+--------+-----------+
 * 
 * Given the Employee table, write a SQL query that finds out employees who earn more than their managers. For the above table, Joe is the only employee who earns more than his manager.
 * +----------+
 * | Employee |
 * +----------+
 * | Joe      |
 * +----------+
 * 
 * URL:
 * https://leetcode.com/problems/employees-earning-more-than-their-managers/description/
 */
SELECT a.NAME AS Employee
FROM Employee AS a JOIN Employee AS b
  ON a.ManagerId = b.Id
  WHERE A.Id IN (
    SELECT Id FROM Employee WHERE ManagerId IS NOT NULL
  )
  AND a.Salary > b.Salary
;