import React, { useState, createContext, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard'
import { SmallSidebar, BigSidebar, Navbar } from "../components"
import { checkDefaultTheme } from '../App'

const DashBoardContext = createContext();

const DashBoardLayout = () => {
    console.log(checkDefaultTheme());
    //temp
    const user = { name: 'john' };
    const [showSidebar, setShowSidebar] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());
    console.log("isDarkTheme: " + isDarkTheme);
    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        document.body.classList.toggle('dark-theme', newDarkTheme);
        localStorage.setItem('darkTheme', newDarkTheme);
        console.log('toggle dark theme');
    };

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }

    const logoutUser = async () => {
        console.log('logout user');
    }
    return (
        <DashBoardContext.Provider value={{
            user,
            showSidebar,
            isDarkTheme,
            toggleDarkTheme,
            toggleSidebar,
            logoutUser
        }}>
            <Wrapper>
                <main className="dashboard">
                    <SmallSidebar />
                    <BigSidebar />
                    <div>
                        <Navbar />
                        <div className="dashboard-page">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </Wrapper>
        </DashBoardContext.Provider>
    );
};
export const useDashboardContext = () => useContext(DashBoardContext);
export default DashBoardLayout
