import type { components } from '../interfaces/components'

export function Product({ data }: { data: components })
{
    return (
        <>
            <div className="flex items-center h-screen gap-8 px-8">
                <div className="h-200 w-[45%] max-w-full border-black border-solid border-[10px]">
                    <img src={data.link} alt={data.label} className="w-full h-full object-cover"/>
                </div>
                <div className="flex flex-col w-[55%]">
                    <p className="text-black text-2xl font-bold mb-2">{data.label}</p>
                    <p className="text-black text-lg mb-4">{data.data}</p>
                    <div>
                        <ul className="flex flex-row gap-4">
                            {data.sub.map((option, index) => (
                                <li key={index} className="cursor-pointer hover:bg-gray-200 hover:scale-105 active:scale-95 active:bg-gray-300 transition-all duration-200 p-2 rounded">
                                    <p className="text-black">{option.label}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-row gap-4 mt-4">
                        <button className="btn btn-primary">Add to Cart</button>
                        <button className="btn btn-secondary">Buy</button>
                    </div>
                </div>
            </div>
        </>
    )
}
