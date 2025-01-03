import React from 'react'
import { IFilter } from '../../types'

interface Props {
    filters: IFilter[],
    currentFilter: IFilter,
    setCurrentFilter: React.Dispatch<React.SetStateAction<IFilter>>
}

export default function Filters({ filters, currentFilter, setCurrentFilter }: Props) {
    return (
        <div className='flex gap-5 items-center'>
            {filters.map(filter => (
                <span
                    key={filter}
                    className={`cursor-pointer duration-500 hover:text-black ${currentFilter === filter ? 'text-blue-500' : ''}`}
                    onClick={() => setCurrentFilter(filter)}
                >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </span>
            ))}
        </div>
    )
}
