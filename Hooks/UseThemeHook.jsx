"use client "
import axios from "axios"
import moment from "moment"
import { useEffect, useState } from "react"

const UseThemeHook = () => {
    // theme according to weather and time 
    const [time, setTime] = useState()
    const [morningTime, setMorningTime] = useState("00:00:00")
    const [afternoonTime, setafternoonTime] = useState("12:00:00")
    const [eveningTime, seteveningTime] = useState("17:00:00")
    const [nightTime, setnightTime] = useState("20:00:00")
    const [currentTheme, setCurrentTheme] = useState()
    const [weatherInformation, setWeatherInformation] = useState()

    useEffect(() => {
        getWeatherInformation()
    }, [])

    const getWeatherInformation = async () => {
        try {
            let response = await axios.get("https://api.weatherapi.com/v1/current.json?q=kangra%20&lang=hindi&key=da25d190f1d14c9490271939252802")
            setWeatherInformation(response.data?.current?.condition.text)
            console.log(response, "response", weatherInformation, "weatherInformation")
        } catch (error) {
            console.log(error, "errors")
        }
    }

    console.log(weatherInformation, "weatherInformation")
    const [morningTheme, setMorningTheme] = useState({
        name: "morning",
        textColor: "#2D2A26",
        background: "#FFF7E6",
        buttonBackground: "#FFD166",
        buttonText: "#5A3E1B",
        buttonBorder: "#E6B800",
        buttonHoverBackground: "#FFB347",
        buttonHoverText: "#5A3E1B",
        header: "#FFECB5",
        heading: "#3D2C1E",
        contentText: "#5A4A42",
        links: "#E67E22",
        linkHover: "#D35400",
    });
    const [afternoonTheme, setAfternoonTheme] = useState({
        name: "afternoon",
        textColor: "#2A2A2A",
        background: "#FFF1C1",
        buttonBackground: "#FFA500",
        buttonText: "#FFFFFF",
        buttonBorder: "#E69500",
        buttonHoverBackground: "#FF8C00",
        buttonHoverText: "#FFFFFF",
        header: "#FFD700",
        heading: "#2A1F14",
        contentText: "#4D3F34",
        links: "#C75C00",
        linkHover: "#8C3E00",
    });
    const [eveningTheme, setEveningTheme] = useState({
        name: "evening",
        textColor: "#F3E5F5",
        background: "#1E1449",
        buttonBackground: "#B23A48",
        buttonText: "#FFFFFF",
        buttonBorder: "#8E2C3A",
        buttonHoverBackground: "#731F29",
        buttonHoverText: "#FFFFFF",
        header: "#432D59",
        heading: "#E6C6FF",
        contentText: "#C2A3C8",
        links: "#E07A5F",
        linkHover: "#C45D44",
    });
    const [nightTheme, setNightTheme] = useState({
        name: "night",
        textColor: "#E0E0E0",
        background: "#121826",
        buttonBackground: "#4A90E2",
        buttonText: "#FFFFFF",
        buttonBorder: "#357ACD",
        buttonHoverBackground: "#2C6EBF",
        buttonHoverText: "#FFFFFF",
        header: "#1F2937",
        heading: "#F3F4F6",
        contentText: "#A1A1A1",
        links: "#3B82F6",
        linkHover: "#2563EB",
    });
    const [stormyTheme, setStormyTheme] = useState({
        name: "stormy",
        textColor: "#D1D5DB",  // Light grey for readability
        background: "#0F172A",  // Deep dark blue like thunderclouds
        buttonBackground: "#37474F",  // Dark grey like wet roads
        buttonText: "#E0E0E0",  // Soft white for contrast
        buttonBorder: "#455A64",  // Muted blue-grey for depth
        buttonHoverBackground: "#263238",  // Darker grey for hover
        buttonHoverText: "#FFFFFF",  // Pure white for contrast
        header: "#1E293B",  // Dark blue-grey like heavy rain clouds
        heading: "#CBD5E1",  // Soft white-grey like distant clouds
        contentText: "#A1A1A1",  // Muted grey for readability
        links: "#60A5FA",  // Cool blue like rain reflections
        linkHover: "#3B82F6",  // Vibrant blue for hover effect
    });


    const [mistyTheme, setMistyTheme] = useState({
        name: "misty",
        textColor: "#4B5563",  // Soft grey for a gentle contrast
        background: "#CBD5E1",  // Light blue-grey like misty clouds
        buttonBackground: "#94A3B8",  // Subtle desaturated blue
        buttonText: "#1E293B",  // Dark blue-grey for contrast
        buttonBorder: "#64748B",  // Cool grey-blue for edges
        buttonHoverBackground: "#7B8EA1",  // Slightly darker hover effect
        buttonHoverText: "#FFFFFF",  // White for a clean look
        header: "#94A3B8",  // Desaturated blue-grey
        heading: "#1E293B",  // Dark blue-grey like deep mist
        contentText: "#475569",  // Balanced soft grey text
        links: "#3B82F6",  // Fresh blue for links
        linkHover: "#2563EB",  // More vibrant blue on hover
    });
    const [heavyRainTheme, setHeavyRainTheme] = useState({
        name: "heavyRain",
        textColor: "#D6E4F0",  // Light blue-grey for readability
        background: "#1C2833",  // Dark grey-blue like a rainy night
        buttonBackground: "#2C3E50",  // Dark steel blue
        buttonText: "#D6E4F0",  // Soft white-blue for contrast
        buttonBorder: "#34495E",  // Slightly lighter grey-blue
        buttonHoverBackground: "#17202A",  // Darker grey for depth
        buttonHoverText: "#FFFFFF",  // White for contrast
        header: "#212F3C",  // Deep grey-blue like heavy clouds
        heading: "#A9CCE3",  // Lighter misty blue
        contentText: "#B0BEC5",  // Muted grey for readability
        links: "#76B6EC",  // Soft blue like water reflections
        linkHover: "#5FA8D3",  // Brighter blue for hover
    });


    useEffect(() => {
        let currenttime = moment()
        let formattedtime = currenttime.format("HH:mm:ss")
        let theme = getTheme(formattedtime)
        console.log(currenttime, "currenttime", currenttime.format("HH:mm:ss"), theme)
    }, [time])
    console.log(currentTheme, "currentTheme")
    const getTheme = (time) => {
        console.log(weatherInformation)
        if (weatherInformation) {
            setCurrentTheme(heavyRainTheme)
            console.log("weatherconditionexecuted");
        }
        else {
            console.log("elsestart");
            if (time >= morningTime && time < afternoonTime) {
                setCurrentTheme(morningTheme)
            }
            else {
                if (time >= afternoonTime && time < eveningTime) {
                    setCurrentTheme(afternoonTheme)
                }
                else if (time >= eveningTime && time < nightTime) {
                    setCurrentTheme(stormyTheme)
                }
                else if (time >= nightTime && time > morningTime) {
                    setCurrentTheme(nightTheme)
                }
            }
            console.log("elseend");
        }
    }
    return {
        currentTheme
    }
}
export default UseThemeHook