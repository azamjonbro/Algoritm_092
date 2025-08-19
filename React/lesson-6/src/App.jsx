import React from 'react'
import Component from './Component'
function App() {
  const girls = [
    {
      name:"Katya",
      year:2006,
      fashion: "old style",
      hairColor:"purple",
      hobby:"athletic",
      language:"polish",
      accessories:{
        bags:["Hermes","Dolce gabanna","Gucci"],
        parfums:{
          cosmetics:['lipstick',"drawshe"],
          mask:["black","cucumber cream"]
        }
      }
    },
    {
      name: "Laylo",
      year: 2005,
      fashion: "modern",
      hairColor: "blonde",
      hobby: "reading",
      language: "uzbek",
      accessories: {
        bags: ["Chanel", "Prada"],
        parfums: {
          cosmetics: ["mascara", "blush"],
          mask: ["rose", "aloe vera"]
        }
      }
    },
    {
      name: "Sofia",
      year: 2007,
      fashion: "casual",
      hairColor: "brown",
      hobby: "painting",
      language: "russian",
      accessories: {
        bags: ["Louis Vuitton", "Michael Kors"],
        parfums: {
          cosmetics: ["eyeliner", "foundation"],
          mask: ["mint", "charcoal"]
        }
      }
    },
    {
      name: "Amina",
      year: 2008,
      fashion: "sporty",
      hairColor: "black",
      hobby: "cycling",
      language: "english",
      accessories: {
        bags: ["Nike", "Adidas"],
        parfums: {
          cosmetics: ["lip balm", "concealer"],
          mask: ["green tea", "honey"]
        }
      }
    },
    {
      name: "Nargiza",
      year: 2006,
      fashion: "classic",
      hairColor: "red",
      hobby: "dancing",
      language: "turkish",
      accessories: {
        bags: ["Versace", "Fendi"],
        parfums: {
          cosmetics: ["powder", "bronzer"],
          mask: ["lavender", "coconut"]
        }
      }
    },
    {
      name: "Malika",
      year: 2005,
      fashion: "vintage",
      hairColor: "grey",
      hobby: "singing",
      language: "tajik",
      accessories: {
        bags: ["Coach", "Guess"],
        parfums: {
          cosmetics: ["highlighter", "primer"],
          mask: ["banana", "avocado"]
        }
      }
    }
  ]
  return (
    <div>
      <Component name="" girls={girls}/>
    </div>
  )
}

export default App
