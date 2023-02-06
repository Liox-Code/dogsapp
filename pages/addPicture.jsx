import React, { useRef, useState } from 'react'

const index = () => {
  const fileInput = useRef(null)
  const onFileSelectSuccess = file => setSelectedFile(file)

  const handleFileInput = e => {
    // handle validations
    const file = e.target.files[0]
    console.log(file)
    if (file.size > 1024)
      console.log({ error: 'File size cannot exceed more than 1MB' })
    else onFileSelectSuccess(file)
  }
  return (
    <div className="file-uploader">
      <input type="file" onChange={handleFileInput} />
      <button
        onClick={e => fileInput.current && fileInput.current.click()}
        className="btn btn-primary"
      />
    </div>
  )
}

export default index
