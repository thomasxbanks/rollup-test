export const toBoolean = (state) => {
  if (state && state === "true") {
    return true
  }
  return false
}
