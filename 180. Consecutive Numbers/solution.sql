# Write your MySQL query statement below

SELECT DISTINCT a.num AS ConsecutiveNums
FROM
  (SELECT num,
          (CASE
               WHEN @record = num THEN @count := @count + 1
               WHEN @record := num THEN @count := 1
           END) AS count_result
   FROM Logs,

     (SELECT @record := NULL, @count := 0) b) a
WHERE a.count_result >= 3;