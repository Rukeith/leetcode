# Write your MySQL query statement below

SELECT CLASS
FROM courses
GROUP BY CLASS
HAVING COUNT(DISTINCT student) >= 5;