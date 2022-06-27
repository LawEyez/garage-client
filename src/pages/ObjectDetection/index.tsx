import React, { useEffect, useRef, useState } from 'react'
import { RiArrowLeftSLine, RiCameraSwitchFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

import * as cocoSSD from '@tensorflow-models/coco-ssd'
import '@tensorflow/tfjs'

import Loader from '@components/Loader'
import { FcSwitchCamera } from 'react-icons/fc'

// Add 'stream' to window type.
declare global {
  interface Window {
    stream: any
  }
}


const ObjectDetection = () => {
  // Navigate.
  const navigate = useNavigate()

  // Configure state.
  const [loading, setLoading] = useState<boolean>(false)
  const [facing, setFacing] = useState<string>('user')

  // Create refs.
  const videoRef = useRef('') as React.MutableRefObject<any>
  const canvasRef = useRef('') as React.MutableRefObject<any>

  // Handle facing mode change.
  const switchCamera = () => {
    if (facing === 'user') {
      setFacing('environment')

    } else {
      setFacing('user')
    }
  }

  useEffect(() => {
    setLoading(true)

    if (navigator.mediaDevices) {

      // Load webcam.
      const webcam = navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: facing
        }
      })
      .then(stream => {
        window.stream = stream
        
        videoRef.current.srcObject = stream

        return new Promise<void>((resolve, reject) => {
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
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        console.error(err)
      })
    }
  }, [facing])

  // Detect the frame.
  const detectFrame = (video: any, model: any) => {
    model.detect(video).then((predictions: any) => {
      renderPredictions(predictions)
      requestAnimationFrame(() => {
        detectFrame(video, model)
      })
    })
  }

  // Render predictions.
  const renderPredictions = (predictions: any) => {
    console.log('predictions', predictions)
    const ctx = canvasRef.current.getContext('2d')

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    // Font options.
    const font = '16px Segoe'

    ctx.font = font
    ctx.textBaseline = 'top'

    predictions.forEach((prediction: any) => {
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
      ctx.fillRect(x + (width/2), y, textWidth + 4, textHeight + 4)
    })

    predictions.forEach((prediction: any) => {
      const [x, y, width, ..._] = prediction.bbox

      // Draw the text last to ensure it's on top.
      ctx.fillStyle = '#000000'
      ctx.fillText(prediction.class, x + (width/2), y)
    })
  }

  return (
    <div className='fixed h-screen w-full bg-neutral-900'>
      <div className="relative w-5/6 lg:w-1/3 h-full mx-auto">
        <div className="translate-y-10 2xl:translate-y-20 absolute z-30 w-full">
          <div
            className="flex items-center mb-6 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <div className="rounded-full border border-neutral-400 flex items-center justify-center
            text-white w-6 h-6">
              <RiArrowLeftSLine />
            </div>
            <span className="ml-3 capitalize text-neutral-200 text">back</span>
          </div>
          
          <div className="mb-4 flex items-center justify-between w-full">
            <h1 className="capitalize text-white text-xl">object detection</h1>
            <button
              className="flex items-center justify-center text-neutral-50
            bg-sky-600 w-8 h-8 rounded-full cursor-pointer"
              onClick={switchCamera}
            >
              <RiCameraSwitchFill />
            </button>
          </div>
          
        </div>

        <video 
          autoPlay
          playsInline
          muted
          ref={videoRef}
          height='500'
          width={600}
          className='absolute top-1/2 left-1/2 rounded-xl
          -translate-y-1/2 -translate-x-1/2' 
        />

        <canvas
          height='500'
          width={600}
          className='absolute top-1/2 left-1/2 rounded-lg
          -translate-y-1/2 -translate-x-1/2 z-10'
          ref={canvasRef}
        />

        {loading && (
          <div className="absolute top-1/2 left-1/2 rounded-lg w-[600px] h-[500px]
          -translate-y-1/2 -translate-x-1/2 z-50 flex items-center justify-center
          bg-neutral-900/90">
            <Loader />
          </div>
        )}
      </div>
    </div>
  )
}

export default ObjectDetection