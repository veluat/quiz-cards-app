import { validateFile } from '@/common/utils'

export const validateImage = (file: File) => {
  const maxSizeInBytes = 1024 * 1024
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp']

  return validateFile(file, maxSizeInBytes, allowedTypes)
}
