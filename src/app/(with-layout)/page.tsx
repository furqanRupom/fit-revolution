"use client"
import Hero from '@/components/Hero'
import Progress from '@/components/Progress'
import Raise from '@/components/Raise'
import Image from 'next/image'



export default function Home() {

  return (
  <div className=" max-w-7xl mx-auto">
    <Hero />
    <Progress />
    <Raise />
  </div>
  )
}
