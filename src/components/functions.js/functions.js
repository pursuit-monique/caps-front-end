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

export function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

export function checkin(mi) {
  if (mi > 10) {
    return "You're quite far, do you plan on attending?";
  } else if (mi > 5) {
    return "You're nearby, thinking of stopping by?";
  } else if (mi > 1) {
    return "You're almost there!";
  } else if (mi < 0.05) {
    return "Lets get the party started!  Ready to check in?";
  }
}
