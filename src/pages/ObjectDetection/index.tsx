import React, { useEffect, useRef } from 'react'
import * as cocoSSD from '@tensorflow-models/coco-ssd'
import '@tensorflow/tfjs'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'


const ObjectDetection = () => {
  // Navigate.
  const navigate = useNavigate()

  // Create refs.
  const videoRef = useRef(undefined)
  const canvasRef = useRef('')

  useEffect(() => {
    if (navigator.mediaDevices) {

      // Load webcam.
      const webcam = navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: 'user'
        }
      })
      .then(stream => {
        window.stream = stream
        
        videoRef.current.srcObject = stream

        return new Promise((resolve, reject) => {
          videoRef.current.onloadedmetadata = () => {
            resolve()
          }
        })
      })

      // Load model.
      const model = cocoSSD.load()

      // Call detectFrame after promise resolution.
      Promise.all([model, webcam]).then(values => {
        detectFrame(videoRef.current, values[0])
      })
      .catch(err => console.error(err))
    }
  }, [])

  // Detect the frame.
  const detectFrame = (video, model) => {
    model.detect(video).then(predictions => {
      renderPredictions(predictions)
      requestAnimationFrame(() => {
        detectFrame(video, model)
      })
    })
  }

  // Render predictions.
  const renderPredictions = (predictions) => {
    const ctx = canvasRef.current.getContext('2d')

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    // Font options.
    const font = '16px Segoe'

    ctx.font = font
    ctx.textBaseline = 'top'

    predictions.forEach(prediction => {
      const [x, y, width, height] = prediction.bbox

      // Draw bounding box.
      ctx.strokeStyle = '#ff4444'
      ctx.lineWidth = 2
      ctx.strokeRect(x, y, width, height)
      // ctx.translate(width/2, height/2)

      // Draw the label bg.
      ctx.fillStyle = '#ffffff'
      const textWidth = ctx.measureText(prediction.class).width
      const textHeight = parseInt(font, 10)
      ctx.fillRect(x, y, textWidth + 4, textHeight + 4)
    })

    predictions.forEach(prediction => {
      const [x, y, ..._] = prediction.bbox

      // Draw the text last to ensure it's on top.
      ctx.fillStyle = '#000000'
      ctx.fillText(prediction.class, x, y)
    })
  }

  return (
    <div className='fixed h-screen w-full bg-neutral-900'>
      <div className="relative w-1/3 h-full mx-auto">
        <div className="translate-y-20">
          <div
            className="flex items-center mb-6 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <div className="rounded-full border border-neutral-400 flex items-center justify-center
            text-white p-1">
              <RiArrowLeftSLine />
            </div>
            <span className="ml-3 capitalize text-neutral-200 text">back</span>
          </div>
          
          <h1 className="capitalize text-white text-xl">object detection</h1>
        </div>

        <video 
          autoPlay
          playsInline
          muted
          ref={videoRef}
          height='500'
          width={600}
          className='absolute top-1/2 left-1/2 rounded-lg
          -translate-y-1/2 -translate-x-1/2' 
        />

        <canvas
          height='500'
          width={600}
          className='absolute top-1/2 left-1/2 rounded-lg
          -translate-y-1/2 -translate-x-1/2 z-10'
          ref={canvasRef}
        />
      </div>
    </div>
  )
}

export default ObjectDetection