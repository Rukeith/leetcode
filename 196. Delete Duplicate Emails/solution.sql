-- Write your MySQL query statement below
-- DELETE p1 FROM Person p1, Person p2
-- WHERE p1.Email = p2.Email AND p1.Id > p2.Id
DELETE FROM Person WHERE Id NOT IN (
  SELECT y.* FROM (
    SELECT MIN(z.Id) FROM Person AS z GROUP BY z.Email
  ) AS y
)