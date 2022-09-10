import React from 'react'

import { footerList1, footerList2, footerList3 } from '../utils/constants'
 

const List = ({ items, mt }: { items: string[], mt: Boolean }) => (
    <div className={`flex flex-wrap ${mt && 'mt-5'} gap-2`}>
        {items.map((item: string) => (
            <p key={item} className="text-gray-400 text-sm hover:underline cursor-pointer">
                {item}
            </p>
        ))}
    </div>
)


const Footer = () => {
  return (
    <div className='mt-6 hidden xl:block'>
        <List items={footerList1} mt={false} />
        <List items={footerList2} mt />
        <List items={footerList3} mt />
        <p className='text-gray-400 text-sm mt-5'>TikTik 2022</p>
    </div>
  )
}

export default Footer