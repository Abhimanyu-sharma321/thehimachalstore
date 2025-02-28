"use client "
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

    useEffect(() => {
        let currenttime = moment()
        let formattedtime = currenttime.format("HH:mm:ss")
        let theme = getTheme(formattedtime)
        console.log(currenttime, "currenttime", currenttime.format("HH:mm:ss"), theme)
    }, [time])

    console.log(currentTheme, "currentTheme")

    const getTheme = (time) => {
        if (time >= morningTime && time < afternoonTime) {
            setCurrentTheme(morningTheme)
        }
        else {
            if (time >= afternoonTime && time < eveningTime) {
                setCurrentTheme(afternoonTheme)
            }
            else if (time >= eveningTime && time < nightTime) {
                setCurrentTheme(eveningTheme)
            }
            else if (time >= nightTime && time > morningTime) {
                setCurrentTheme(nightTheme)
            }
        }
    }
    return {
        currentTheme
    }
}
export default UseThemeHook