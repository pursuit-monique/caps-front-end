//distance Calculator DO NOT TOUCH.  Outputs in mi.  Modify line 15 to change measurement.
export function calculateDistance(lat1, lon1, lat2, lon2) {
  const lat1Rad = degreesToRadians(lat1);
  const lon1Rad = degreesToRadians(lon1);
  const lat2Rad = degreesToRadians(lat2);
  const lon2Rad = degreesToRadians(lon2);

  const dlon = lon2Rad - lon1Rad;
  const dlat = lat2Rad - lat1Rad;
  const a =
    Math.sin(dlat / 2) ** 2 +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dlon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const radius = 3956;
  const distance = radius * c;

  return distance.toFixed(2);
}

//Helper function for distance calc.
export function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

//Placeholder check in function.
export function checkin(mi = 0) {
  if (mi > 10) {
    return "You're quite far, do you plan on attending?";
  } else if (mi > 5) {
    return "You're nearby, thinking of stopping by?";
  } else if (mi > 0.3) {
    return "You're almost there!";
  } else if (mi < 0.3) {
    return "Lets get the party started!  Ready to check in?";
  }
}

//  dateHandler.   inputs expects a date,  outputs an object.

export function dateHandler(eventDate = "12/12/1212", eventTime = "00:00") {
  const currDate = new Date(eventDate);
  const today = new Date();
  const month = currDate.getMonth() + 1;
  const date = currDate.getDate() + 1;
  const year = currDate.getFullYear();
  const formattedDate = new Date(`${month}-${date}-${year}`);

  const [hours, minutes] = eventTime.split(":");

  let hours12 = parseInt(hours, 10);
  const amPm = hours12 >= 12 ? "PM" : "AM";

  if (hours12 === 0) {
    hours12 = 12;
  } else if (hours12 > 12) {
    hours12 -= 12;
  }

  return {
    eventdate: `${month}-${date}-${year}`,
    eventtime: `${hours12}:${minutes} ${amPm}`,
    todayDate: today,
    isPrevious: formattedDate - today < 0,
    isRecent: formattedDate - today > 0,
  };
}
