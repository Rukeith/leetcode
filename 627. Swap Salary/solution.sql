# Write your MySQL query statement below
UPDATE salary
SET sex = CHAR(ascii(sex) ^ 11);