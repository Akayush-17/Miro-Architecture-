import React from 'react'

const Miro = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
    <iframe
      title="Your Miro Embed"
      width="1520"
      height="800"
      src="https://miro.com/app/live-embed/uXjVMhno9ww=/?moveToViewport=-30120,-21528,93656,47925&embedId=56916158505"
      frameBorder="0"
      scrolling="no"
      allow="fullscreen; clipboard-read; clipboard-write"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  </div>
  )
}

export default Miro