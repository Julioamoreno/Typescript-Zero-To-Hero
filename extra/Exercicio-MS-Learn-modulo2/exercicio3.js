"use strict";
/* EXERCISE 3
   TODO: In the following code, implement an enum type called Season that represents
   the constants "Fall", "Winter", "Spring", and "Summer". Then, update the function so
   you can pass in the season by referencing an item in the enum, for example
   Season.Fall, instead of the literal string "Fall". */
var Season;
(function (Season) {
    Season[Season["Fall"] = 0] = "Fall";
    Season[Season["Winter"] = 1] = "Winter";
    Season[Season["Spring"] = 2] = "Spring";
    Season[Season["Summer"] = 3] = "Summer";
})(Season || (Season = {}));
function whichMonths(season) {
    let monthsInSeason;
    switch (season) {
        case Season.Fall:
            monthsInSeason = 'September to November';
            break;
        case Season.Winter:
            monthsInSeason = 'December to February';
            break;
        case Season.Spring:
            monthsInSeason = 'March to May';
            break;
        case Season.Summer:
            monthsInSeason = 'June to August';
    }
    return monthsInSeason;
}
console.log(whichMonths(Season.Fall));
