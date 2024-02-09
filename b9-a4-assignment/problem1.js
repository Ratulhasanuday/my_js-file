function calculateMoney(ticketSele) {
    const  ticketPrice=120;
    let totalPrice=ticketSele*ticketPrice;
    const costDaruar=500;
    const costStaff=50;
    let costStaffTotal=costStaff*8;
    let totalCost=costDaruar+costStaffTotal;
    let totalOwn=totalPrice-totalCost;
    if (ticketSele<0) {
        return 'Invalid Number';
    }
    return totalOwn;
   
}
const ticket=calculateMoney(10);
console.log(ticket)