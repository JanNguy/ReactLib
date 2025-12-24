import './css/index.css'
import { NavBar } from './components/NavBar'
import type { components } from './interfaces/components'

function App() {
    const data_n: components = {
        label: "Main Navigation",
        data: "root",
        link: "#",
        sub: [
            {
                label: "Home",
                data: "/",
                link: "/",
                sub: []
            },
            {
                label: "About",
                data: "/about",
                link: "/about",
                sub: [
                    { label: "Team", data: "/about/team", link: "/about/team", sub: [] },
                    { label: "History", data: "/about/history", link: "/about/history", sub: [] }
                ]
            },
            {
                label: "Services",
                data: "/services",
                link: "/services",
                sub: [
                    { label: "Web Development", data: "/services/web", link: "/services/web", sub: [] },
                    { label: "Mobile Apps", data: "/services/mobile", link: "/services/mobile", sub: [] },
                    { label: "Consulting", data: "/services/consulting", link: "/services/consulting", sub: [] }
                ]
            },
            {
                label: "Contact",
                data: "/contact",
                link: "/contact",
                sub: []
            }
        ]
    }

  return (
    <>
        <div className="h-screen w-screen bg-white">
            <NavBar data={data_n}></NavBar>
        </div>
    </>
  )
}

export default App