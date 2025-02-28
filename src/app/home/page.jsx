"use client"
import HomeScreen from "@/components/home/Home"
import UseThemeHook from "../../../Hooks/UseThemeHook"
const Home = () => {
    const { morningTheme } = UseThemeHook()
    return (
        <>
            <HomeScreen />
        </>
    )
}

export default Home