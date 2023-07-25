declare namespace API {
  type CaptchaParams = {
    width?: number
    height?: number
  }

  type CaptchaResult = {
    img: string
    id: string
  }
}
