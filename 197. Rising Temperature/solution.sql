# Write your MySQL query statement below

SELECT id
FROM
  (SELECT id,
          IF(@pre < temperature && To_days(recorddate) - @day = 1, 0, 1) AS choice, @pre:=temperature, @day:=to_days(recorddate)
   FROM
     (SELECT *
      FROM weather
      ORDER BY recorddate) c,

     (SELECT @pre:=NULL, @day:=0) a) b
WHERE b.choice = 0;