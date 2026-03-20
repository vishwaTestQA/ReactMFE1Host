export const isWeekend = (date) => {
   const day = date.getDay()
   return day === 0 || day === 6
}