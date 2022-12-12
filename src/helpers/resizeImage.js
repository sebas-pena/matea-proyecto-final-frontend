const resize = (img, height, width, cb) => {
  let canvas = document.createElement('canvas')
  canvas.width = width;
  canvas.height = height;
  const hRatio = canvas.width / img.width;
  const vRatio = canvas.height / img.height
  const ratio = Math.min(hRatio, vRatio);
  const centerShift_x = (canvas.width - img.width * ratio) / 2;
  const centerShift_y = (canvas.height - img.height * ratio) / 2;
  const ctx = canvas.getContext("2d")
  ctx.fillStyle = "#fff"
  ctx.fillRect(0, 0, width, height)
  ctx.drawImage(img, 0, 0, img.width, img.height,
    centerShift_x, centerShift_y, img.width * ratio, img.height * ratio)
  canvas.toBlob(resizedImage => {
    cb(resizedImage)
  })
}

const resizeImageFile = (file, width, height) => {
  return new Promise((res, rej) => {
    if (file.type.match(/image.*/)) {
      let reader = new FileReader();
      reader.onload = (data) => {
        let img = new Image();
        img.onload = () => {
          resize(img, height, width, res)
        }
        img.src = data.target.result;
      }
      reader.readAsDataURL(file);
    } else {
      rej("it's not an image")
    }
  })
}

const resizedImageURL = (url, width, height) => {
  return new Promise((res, rej) => {
    let img = new Image();
    img.onload = () => {
      resize(img, height, width, res)
    }
    img.src = url;
  })
}

export {
  resizeImageFile,
  resizedImageURL
}