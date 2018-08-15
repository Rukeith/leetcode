# Write your MySQL query statement below
SELECT L3.Num AS ConsecutiveNums FROM Logs AS L1
INNER JOIN Logs AS L2 ON L1.Id = (L2.Id + 1) AND L1.Num = L2.Num 
INNER JOIN Logs AS L3 ON L1.Id = (L3.Id + 2) AND L1.Num = L3.Num
GROUP BY L3.Num;