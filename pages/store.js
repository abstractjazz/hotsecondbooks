import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useEffect from 'react';

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'



export default function store() {
  
  return (
    <div className="bg-white">
       <Head>
        <title>Hot Second Books</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1 className="text-7xl">THIS IS THE STORE PAGE</h1>
    </div>
  )
}
