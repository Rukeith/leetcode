# Write your MySQL query statement below

SELECT temp.Request_at AS 'Day',
       round(temp.cancelled/temp.total, 2) AS 'Cancellation Rate'
FROM
  (SELECT t.Request_at,
          sum(CASE
                  WHEN t.Status IN ('cancelled_by_driver', 'cancelled_by_client') THEN 1
                  ELSE 0
              END) AS cancelled,
          count(t.Id) AS total
   FROM Trips t
   WHERE t.Client_ID NOT IN
       (SELECT Users_ID
        FROM Users
        WHERE Banned = 'Yes')
     AND t.Driver_ID NOT IN
       (SELECT Users_ID
        FROM Users
        WHERE Banned = 'Yes')
   GROUP BY t.Request_at) AS TEMP
WHERE temp.Request_at BETWEEN '2013-10-01' AND '2013-10-03';