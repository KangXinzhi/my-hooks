import { useState, useEffect } from 'react'

function useUploadImage(src?: string) {
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<any>(undefined)
  const [url, setUrl] = useState(src)
  const onSuccess = (value: string) => {
    setProgress(100)
    setUrl(value)
    setUploaded(true)
    setUploading(false)
  }
  useEffect(() => {
    setUrl(src)
  }, [src])
  const onError = (err: any) => {
    setError(err)
    setUploaded(false)
    setUploading(false)
  }
  const onUploading = (uploadingSrc: string) => {
    uploadingSrc !== undefined && setUrl(uploadingSrc)
    setUploading(true)
    setUploaded(false)
    setError(undefined)
    setProgress(0)
  }
  const onChangeUrl = setUrl
  const onChangeProgress = (value: number) => {
    setProgress(value)
  }
  return {
    uploading,
    uploaded,
    progress,
    error,
    url,
    onSuccess,
    onError,
    onUploading,
    onChangeUrl,
    onChangeProgress,
  }
}

export default useUploadImage
