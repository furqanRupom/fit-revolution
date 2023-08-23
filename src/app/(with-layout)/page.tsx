"use client"
import appwriteService from '@/appwrite/config'
import Hero from '@/components/Hero'
import Progress from '@/components/Progress'
import Raise from '@/components/Raise'
import Image from 'next/image'
import {useState,useEffect} from "react"



export default function Home() {

  return (
  <div className="  mx-auto">
    <Hero />
    <div className='px-4 max-w-7xl mx-auto'>

    <Progress />
    <Raise />

    </div>
  </div>
  )
}
