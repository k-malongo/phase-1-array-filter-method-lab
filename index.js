// Code your solution here
 function findMatching(drivers, driverNames){
    const check = drivers.filter(driverr=>driverr.toLowerCase()===driverNames.toLowerCase());
// //    return (drivers.filter(drivers=>drivers.toLowerCase()===driverNames.toLowerCase()))


    if(check){
        return check;
    }



 }
function fuzzyMatch(drivers, driverNames){
    //return (drivers.filter(drivers=>drivers.toLowerCase().indexOf(driverNames.toLowerCase())===0))
    const driver= drivers.filter(drivers=>drivers.toLowerCase().indexOf(driverNames.toLowerCase())===0)

    if(driver){
        return driver;
    }

}
function matchName(drivers,driverNames){

    return (drivers.filter(namedfn=>namedfn.name===driverNames ))

}