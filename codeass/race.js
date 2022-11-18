let raceNumber = Math.floor(Math.random() * 1000);
let regisEarly = false;
let regisLate = true;
let regisAge = 18;
if(regisAge > 18 && regisEarly){
raceNumber += 1000;
}
if(regisAge > 18 && regisEarly){
  console.log(`race will start at 9:30 am ${raceNumber}`);
}
else if(regisAge > 18 && regisLate){
  console.log(`Late adults run at 11:00 am ${raceNumber}`);
}else if(regisAge < 18){
console.log(`Youths run at 12:30 pm ${raceNumber}`);
}
else
{
  console.log("runner to see the registration desk");
}