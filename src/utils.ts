export const weekday = ['1', '2', '3', '4', '5']
export const weekend = ['6', '0']

export const days = [...weekday, ...weekend]

export const sortDays = (arr: string[]) : string[] => {
  // Sort
  let output = arr.sort(
    (a, b) => parseInt(a, 10) - parseInt(b, 10),
  )

  // Place "sunday" at the end
  if (output[0] === '0') {
    const sunday = output.splice(0, 1)[0]
    output = [...output, sunday]
  }
  return output
}
