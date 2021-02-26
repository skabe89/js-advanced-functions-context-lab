/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

let createEmployeeRecord = function(array){
    let newEmp = { 
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
    }
    return newEmp
}

let createEmployeeRecords = function(array){
    return array.map(a => createEmployeeRecord(a))
}

let createTimeInEvent = function(date){
    let day = date.split(" ")[0]
    let hour = date.split(" ")[1]
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date: day
    })
    return this
}

let createTimeOutEvent = function(date){
    let day = date.split(" ")[0]
    let hour = date.split(" ")[1]
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date: day
    })
    return this
}

let hoursWorkedOnDate = function(date){
    return (this.timeOutEvents.find(d => d.date == date).hour - this.timeInEvents.find(d => d.date == date).hour) / 100
}

let wagesEarnedOnDate = function(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

// let allWagesFor = function(){
//     let dates = this.timeInEvents.map(d => d.date)
//     return dates.reduce(d => wagesEarnedOnDate.call(this, d))
// }

let findEmployeeByFirstName = function(array, name){
    return array.find(e => e.firstName == name)
}

let calculatePayroll = function(array){
    // let wages = array.map(e => allWagesFor(e))
    // let total = wages.reduce(function(total, num){
    //     return total + num
    // })
    // return total
    return array.reduce(function(total, e){
        return total + allWagesFor.call(e)
    }, 0)
}