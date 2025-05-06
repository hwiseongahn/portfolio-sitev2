import createGlobe from 'cobe'
import { MapPinIcon } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useSpring } from 'react-spring'
import { useState } from 'react'
import { Button } from "@/components/ui/button"

const LocationCard = () => {
  const canvasRef = useRef(null)
  const pointerInteracting = useRef(null)
  const pointerInteractionMovement = useRef(0)
  const fadeMask = 'radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 60%, rgb(0, 0, 0, 0) 70%)'
  const locationToAngles = (lat, long) => {
    return [Math.PI - ((long * Math.PI) / 180 - Math.PI / 2), ((lat * Math.PI) / 180) - 0.2]
  }
  const focusRef = useRef([5.82228399430068, 0.579305218978736])
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001
    }
  }))


  useEffect(() => {
    let width = 0;
    let currentPhi = 5.82228399430068;
    let currentTheta = 0.579305218978736;
    const doublePi = Math.PI * 2;
    const onResize = () => {
      if (canvasRef.current && (width = canvasRef.current.offsetWidth)) {
        window.addEventListener('resize', onResize)
      }
    }
    onResize()
    const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: 5.82228399430068,
        theta: 0.579305218978736,
        dark: 1,
        diffuse: 3,
        mapSamples: 16000,
        mapBrightness: 1.2,
        baseColor: [1, 1, 1],
        markerColor: [251 / 255, 200 / 255, 21 / 255],
        glowColor: [1.2, 1.2, 1.2],
        markers: [
          { location: [43.4679, -80.5373], size: 0.1},
          { location: [44.6509, -63.5923], size: 0.1},
          { location: [35.676, 139.65], size: 0.1},
          { location: [-34.60, -58.38], size: 0.1},
        ],
        onRender: (state) => {
          state.phi = currentPhi
          state.theta = currentTheta
          const [focusPhi, focusTheta] = focusRef.current
          const distPositive = (focusPhi - currentPhi + doublePi) % doublePi
          const distNegative = (currentPhi - focusPhi + doublePi) % doublePi
          // Control the speed
          if (distPositive < distNegative) {
            currentPhi += distPositive * 0.08
          } else {
            currentPhi -= distNegative * 0.08
          }
          currentTheta = currentTheta * 0.92 + focusTheta * 0.08
          state.width = width * 2
          state.height = width * 2
        }
      })
      setTimeout(() => canvasRef.current.style.opacity = '1')
      return () => { 
        globe.destroy();
        window.removeEventListener('resize', onResize);
      }
    }, [])

    const [locationName, setLocationName] = useState('Halifax, Nova Scotia');
  return (
    <div className='shadow-feature-card dark:shadow-feature-card-dark relative flex h-60 flex-col gap-6 overflow-hidden rounded-xl p-4 lg:p-6'>
      <div className='flex justify-between items-center gap-2'>
        <div className='flex items-center gap-2'>
          <MapPinIcon className='size-[18px]' />
          <h2 className='text-sm font-light'>{locationName}</h2>
        </div>
        <div className='text-sm font-light flex flex-row gap-2'>
          <Button onClick={() => {focusRef.current = locationToAngles(43.4679, -80.5373);
            setLocationName('Waterloo, Ontario')
            }}
            variant='outline'
          >
           School📍
          </Button>
          <Button onClick={() => {focusRef.current = locationToAngles(44.6509, -63.5923);
            setLocationName('Halifax, Nova Scotia');
            }}
            className='text-right'
            variant='outline'
          > 
           Home📍
           
          </Button>
        </div>
      </div>
      <div className='absolute inset-x-0 bottom-[-190px] mx-auto aspect-square h-[388px] [@media(max-width:420px)]:bottom-[-140px] [@media(max-width:420px)]:h-[320px] [@media(min-width:768px)_and_(max-width:858px)]:h-[350px] -z-10'>
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            placeItems: 'center',
            placeContent: 'center',
            overflow: 'visible'
          }}
        >
          <div
            style={{
              width: '100%',
              aspectRatio: '1/1',
              maxWidth: 800,
              WebkitMaskImage: fadeMask,
              maskImage: fadeMask
            }}
          >
            <canvas
              ref={canvasRef}
              style={{
                width: '100%',
                height: '100%',
                contain: 'layout paint size',
                cursor: 'auto',
                userSelect: 'none'
              }}
            />
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationCard
