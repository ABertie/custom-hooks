"use client"

import Heading from "@/componets/heading"
import useAxios from "@/hooks/useAxios"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {
  // let [value, setValue] = useState(0)
  let [joke, setJoke] = useState("")
  const { response } = useAxios("garchomp")

  async function getJoke() {
    const RESPONSE = await axios.get("https://icanhazdadjoke.com/", {
      headers: {
        "Accept": "text/plain"
      }
    })
    setJoke(RESPONSE.data)
  }

  useEffect(function() {

    // // fetch("https://icanhazdadjoke.com/", {
    // //   headers : {
    // //     "accept" : "text/plain"
    // //   }
    // // })
    // //   .then(function(response) {
    // //     // throw new error("bøh")
    // //     // console.log(response);
    // //     return response.text()
    // //   })
    // //   .then(data => setJoke(data))
    // //   .catch(function (error) {
    // //     console.log(error);
    // //   })
    // //   .finally(function() {
    // //     // console.log("færdig");
    // //   })

    // // terminal: npm i azios
    // axios.get("https://icanhazdadjoke.com/", {
    //   headers: {
    //     "Accept": "text/plain"
    //   }
    // })
    // .then(res => setJoke(res.data))

    getJoke()

  }, []) //value

  return (
    <main className="flex flex-col gap-2 p-6 bg-emerald-100 min-h-screen">
      {/* <Heading content="Hej verden!" /> */}
      <Heading level="1" color="rgb(2 44 34)">
        Hello, world!
      </Heading>
      {/* <button onClick={() => setValue(value + 1)}>Klik her</button> */}
      {/* <p>{value}</p> */}
      <div className="p-6 bg-emerald-400 rounded flex flex-col gap-4 items-center">
        <p className="text-emerald-950">{joke}</p>
        <button onClick={() => getJoke()} className="rounded py-1 px-4 bg-emerald-700 text-emerald-100">Get new joke</button> {/* setValue(value + 1) */}
      </div>
      <div className="p-6 bg-emerald-400 rounded flex flex-col gap-4 items-center">
        <img src={response?.sprites?.front_default} />
      </div>
    </main>
  )
}