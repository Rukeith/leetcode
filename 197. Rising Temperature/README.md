# [197. Rising Temperature](https://leetcode.com/problems/rising-temperature/)

> SQL Schema

        Create table If Not Exists Weather (Id int, RecordDate date, Temperature int)
        Truncate table Weather
        insert into Weather (Id, RecordDate, Temperature) values ('1', '2015-01-01', '10')
        insert into Weather (Id, RecordDate, Temperature) values ('2', '2015-01-02', '25')
        insert into Weather (Id, RecordDate, Temperature) values ('3', '2015-01-03', '20')
        insert into Weather (Id, RecordDate, Temperature) values ('4', '2015-01-04', '30')

Given a `Weather` table, write a SQL query to find all dates' Ids with higher temperature compared to its previous (yesterday's) dates.

    +---------+------------+------------------+
    | Id(INT) | Date(DATE) | Temperature(INT) |
    +---------+------------+------------------+
    |       1 | 2015-01-01 |               10 |
    |       2 | 2015-01-02 |               25 |
    |       3 | 2015-01-03 |               20 |
    |       4 | 2015-01-04 |               30 |
    +---------+------------+------------------+

For example, return the following Ids for the above `Weather` table:

    +----+
    | Id |
    +----+
    |  2 |
    |  4 |
    +----+
