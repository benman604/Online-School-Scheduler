// [class-name, meeting-link]
// Index = period number (corresponding to start times arrays index)
var periods = [
    ["P1", ""],
    ["P2", ""],
    ["P3", ""],
    ["P4", ""],
    ["P5", ""],
    ["P6", ""]
]

// 0=sun 1=mon, 2=tues, etc.
// Days of the week schedule will be active
var primaryDays = [1]
// Index = period number (corresponding to "periods" array index)
// Start times [hour, minute]
// Leave undefined for inactive period
var primaryStartTimes = [
    [8, 53],
    [9, 37],
    [10, 27],
    [11, 17],
    [12, 47],
    [13, 37]
]

var secondaryDays = [2,4]
var secondaryStartTimes = [
    [8, 46],
    [],
    [10, 21],
    [],
    [12, 36],
    []
]

var days3 = [3,5]
var startTimes3 = [
    [],
    [8, 46],
    [],
    [10, 21],
    [],
    [12, 36]
]
/*
    [],
    [8, 46],
    [],
    [10, 21],
    [],
    [12, 36]
*/
