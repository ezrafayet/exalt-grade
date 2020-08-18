# exalt-grade package

Pass a grade, get a better one.

# Under the hood

Bijective translation (obtained by applying a second degree polynomial on the range [minimumGrade, maximumGrade]) to slightly exhale grades while keeping order.

* [a, b] -> [a, b]
* a < b => f(a) < f(b)

# How to use it ?

Pass a grade, pass an exaltation rate and get a better grade while keeping your grades order for fairness

## Install it

```
    npm i exalt-grade
```

## Import it

```
    const exaltGrade = require("exalt-grade").exaltGrade;
    
    or
    
    import {exaltGrade} from "exalt-grade";
```

## Use it out of the box

```
    const betterGrade = exaltGrade(oldGrade);
```

## Use it with custom parameters

By default exaltation is 28 and grades are between 0 and 5, but you can pass new values for the three of them


```
    const betterGrade = exaltGrade(oldGrade, exaltation, minimumGrade, maximumGrade);
    
    example :
    
    const betterGrade = exaltGrade(oldGrade, 35, 0, 100);
```

# Steps

* [x] Define functions 
* [x] Build mathematic model (polynomial translation, acts like a bijective translation on the considered interval)
* [ ] Allow to pass an array of grades
* [ ] Only return one decimal max
* [ ] Build the npm package with js + ts
* [ ] Write the doc
* [ ] Unit testing
