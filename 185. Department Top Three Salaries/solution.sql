# Write your MySQL query statement below

SELECT department.name AS Department,
       tmp.name AS Employee,
       tmp.salary AS Salary
FROM
  (SELECT id,
          name,
          salary,
          departmentid,
          (CASE
               WHEN @mydepartmentid = departmentid
                    AND @mysalary > salary THEN @myrank := @myrank + 1
               WHEN @mydepartmentid <> departmentid THEN @myrank := 0
               ELSE @myrank
           END) AS Rank, @mydepartmentid := departmentid AS dummy1, @mysalary := salary AS dummy2
   FROM employee,

     (SELECT @mydepartmentid := NULL,
                                @mysalary := NULL, @myrank := 0) AS t
   ORDER  BY departmentid,
             salary DESC) AS tmp
JOIN department ON department.id = tmp.departmentid
WHERE rank < 3;