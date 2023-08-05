import Hero from '@/components/Hero'
import Progress from '@/components/Progress'
import Raise from '@/components/Raise'
import { Herr_Von_Muellerhoff } from 'next/font/google'
import Image from 'next/image'

export default function Home() {
  return (
  <div>
    <Hero />
    <Progress />
    <Raise />
  </div>
  )
}
