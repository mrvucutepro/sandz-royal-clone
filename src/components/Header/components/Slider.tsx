"use client"

import * as React from "react"
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import HeroBar from "./HeroBar"

export function Slider() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )
      
const images = [
    "/assets/image/banner-1.png", 
    "/assets/image/banner-2.png",
    "/assets/image/banner-3.png",
  ];
  return (
    <>
    <Carousel id="carousel-container" className="w-full h-full"      
    plugins={[plugin.current]}
    onMouseEnter={plugin.current.stop}
    onMouseLeave={plugin.current.reset}>
        
      <CarouselContent className="h-full">
        {images.map((src, index) => (

          <CarouselItem key={index}>
            <div className="h-full flex items-center justify-center " id="carousel-item">
                <Card className="h-full w-full">
                <CardContent className="flex h-full w-full items-center justify-center !p-0">
                  <img src={src} className="h-full w-full object-cover" alt='Carousel item'/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </>

  )
}
