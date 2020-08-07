# exalt-grade

Bijective translation to slightly exhale grades while keeping the order ( [a, b] -> [a, b] and a < b -> f(a) < f(b) )

Pass a grade, get a better one.


## How to use it ?

Pass a grade, pass an exaltation rate and get a better grade while keeping your grades order for fairness

     
    const betterGrade = exaltGrade(oldGrade);

By default exaltation is 28 and grades are between 0 and 5, but you can pass new values for the three of them

    const betterGrade = exaltGrade(oldGrade, 35, 0, 100);


## Steps

* [x] Define functions 
* [x] Build mathematic model (polynomial translation, acts like a bijective translation on the considered interval)
* [ ] Build the npm package with js + ts
* [ ] Write the doc
* [ ] Unit testing
