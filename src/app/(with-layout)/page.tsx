import Hero from '@/components/Hero'
import Progress from '@/components/Progress'
import Raise from '@/components/Raise'
import { Herr_Von_Muellerhoff } from 'next/font/google'
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
