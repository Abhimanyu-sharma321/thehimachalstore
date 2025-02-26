"use client"
import { createContext } from "react"

export const registerContext = createContext()

export const setDatainLocalStorage = (data, key) => {
    console.log(data, key, "dataandKey")
    let stringifyData = JSON.stringify(data)
    localStorage.setItem(key, stringifyData)
}
export const GetLocalStoragedata = (key) => {
    let getData = localStorage.getItem(key)
    let parsedData = JSON.parse(getData)
    return parsedData || null
}


