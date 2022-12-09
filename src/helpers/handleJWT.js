const parseJWT = (jwt) => JSON.parse(atob(jwt.split(".")[1]))

export default parseJWT
