# Write your MySQL query statement below

DELETE
FROM person
WHERE id NOT IN
    (SELECT a.id
     FROM
       (SELECT Min(p.id) AS ID
        FROM person p GROUP  BY p.email) AS a)