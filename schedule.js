// [class-name, meeting-link]
// Index = period number (corresponding to start times arrays index)
var periods = [
    ["Chem", "https://zoom.us/j/91707592179?pwd=bWVLTSs5VW5TUUJiVzRjZFJHUXdLQT09"],
    ["English", "https://us02web.zoom.us/j/85937202726?pwd=UERHTWREWHg2bGxYWjhSTmI2YzJOZz09"],
    ["Chinese", "https://zoom.us/j/97295431536?pwd=QUsxRDE1NU9KRTJJNENoT0tlQ0czUT09"],
    ["PE", "https://us02web.zoom.us/j/85256269999?pwd=Q1RVZGVIbkFJTEEzWTVwbWZ0TGpUdz09"],
    ["Math", "https://us02web.zoom.us/j/87486934520?pwd=alBZRXptSGhrRjROMHRNZyt2TEszUT09"],
    ["Hist", "https://zoom.us/j/8939758619?pwd=Wk12dXRuRWhMVnhwRzFtTlhXWUJPUT09"]
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

var secondaryDays = [2, 4]
var secondaryStartTimes = [
    [8, 46],
    [],
    [10, 21],
    [],
    [12, 36],
    [23,0]
]

var days3 = [0]
var startTimes3 = [
    [],
    [23, 30],
    [],
    [23, 32],
    [],
    [23, 34]
]

/*
    [],
    [8, 46],
    [],
    [10, 21],
    [],
    [12, 36]
*/