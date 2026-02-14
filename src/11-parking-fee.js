/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
export function calculateParkingFee(hours, vehicleType) {
  if(vehicleType!=="car" && vehicleType!=="motorcycle" && vehicleType!=="bus" || hours<=0){
    return -1;}
 
   
let fee1=5;
let maximumFee1=30
let fee2=3;
let maximumFee2=18;
let fee3=10;
let maximumFee3=60;

if (!Number.isInteger(hours)) {
    hours = Math.ceil(hours); 
    
}

if(vehicleType==="car" && hours===1){
  fee1=5
  return fee1
}
else if(vehicleType==="car" && hours>1){
   fee1=fee1+(hours-1)*3
   
   if( fee1>maximumFee1){
  return maximumFee1
}
   else{return fee1}
   
}

if(vehicleType==="motorcycle" && hours===1){
  fee2=3;
  return fee2
}
else if(vehicleType==="motorcycle" && hours>1){
   fee2=fee2+(hours-1)*2
   
   if( fee2>maximumFee2){
  return maximumFee2
}else{ return fee2}
}

if(vehicleType==="bus" && hours===1){
    fee3;
    return fee3
}
else if( vehicleType==="bus" && hours>1){
   fee3=fee3+(hours-1)*7
   
   if( fee3>maximumFee3){
  return maximumFee3
}else{return fee3}
}

}
