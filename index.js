// Your code here
function createEmployeeRecord(employeeData) {
    return {
      firstName: employeeData[0],
      familyName: employeeData[1],
      title: employeeData[2],
      payPerHour: employeeData[3],
      timeInEvents: [],
      timeOutEvents: []
    }
  }
  
  function createEmployeeRecords(ary){
    return ary.map(createEmployeeRecord)
  }
  
  function createTimeInEvent(employee, dateTimeString) {
    const [date, hour] = dateTimeString.split(' ')
    employee.timeInEvents.push({
      type: "TimeIn",
      date: date,
      hour: parseInt(hour, 10)
    })
    return employee
  }
  
  function createTimeOutEvent(employee, dateTimeString) {
    const [date, hour] = dateTimeString.split(' ')
    employee.timeOutEvents.push({
      type: "TimeOut",
      date: date,
      hour: parseInt(hour, 10)
    })
    return employee
  }
  
  function hoursWorkedOnDate(employee, date) {
    const timeIn = employee.timeInEvents.find(event => event.date === date)
    const timeOut = employee.timeOutEvents.find(event => event.date === date)
    const hoursWorked = (timeOut.hour - timeIn.hour) / 100
    return hoursWorked
  }
  
  function wagesEarnedOnDate(employee, date) {
    const hoursWorked = hoursWorkedOnDate(employee, date)
    const payRate = employee.payPerHour
    return hoursWorked * payRate
  }
  
  function allWagesFor(employee) {
    const datesWorked = employee.timeInEvents.map(event => event.date)
    const allWages = datesWorked.reduce((totalWages, date) => {
      return totalWages + wagesEarnedOnDate(employee, date)
    }, 0)
    return allWages
  }
  
  function calculatePayroll(employees) {
    return employees.reduce((totalPayroll, employee) => {
      return totalPayroll + allWagesFor(employee)
    }, 0)
  }


  
