import './css/index.css'
import "./components/Product"
import type { components } from './interfaces/components'
import { Product } from './components/Product'

function App() {
    const data_n: components = {
        label: "Product1",
        data: "Produit de haute qualité",
        link: "/ex_landing.png",
        sub: [
            {
                label: "Option 1",
                data: "/",
                link: "/",
                sub: []
            },
            {
                label: "Option 2",
                data: "/",
                link: "/",
                sub: []
            },
                        {
                label: "Option 3",
                data: "/",
                link: "/",
                sub: []
            }
        ]
    }

  return (
    <>
        <div className="h-screen w-screen bg-white pt-4">
            <Product data={data_n} />
        </div>
    </>
  )
}

export default App