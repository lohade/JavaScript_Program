var day;
switch (new Date().getDay()) {
  case 0:
    console.log(day = "Sunday");
    break;
  case 1:
    console.log(day = "Monday");
    break;
  case 2:
    console.log(day = "Tuesday");
    break;
  case 3:
    console.log(day = "Wednesday");
    break;
  case 4:
    console.log(day = "Thursday");
    break;
  case 5:
    console.log(day = "Friday");
    break;
  case 6:
    console.log(day = "Saturday");
    break;
  default:
    day = "Unknown Day";
}