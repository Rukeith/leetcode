# Write your MySQL query statement below

SELECT s1.score AS Score,
       Rank
FROM scores AS s1
LEFT JOIN
  (SELECT score, @num := @num + 1 AS Rank
   FROM
     (SELECT DISTINCT score
      FROM scores
      ORDER BY score DESC) AS s,

     (SELECT @num := 0) AS t) AS TEMP USING (score)
ORDER BY Rank;