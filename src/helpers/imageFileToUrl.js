const imageFileToUrl = (file, cb) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.addEventListener("load", (e) => {
    cb(e.target.result)
  })
}

export default imageFileToUrl