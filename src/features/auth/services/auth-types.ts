export type LoginArgs = {
  email: string
  password: string
  rememberMe?: boolean
}

export type LoginResponse = {
  accessToken: string
}

export type ProfileResponse = {
  avatar?: null | string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type UpdateProfileFormData = FormData

export type SignUpArgs = Omit<LoginArgs, 'rememberMe'>

export type RecoverPasswordRequest = {
  email: string
  html: string
  subject: string
}
