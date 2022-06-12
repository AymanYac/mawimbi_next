import StatisticListItem from 'components/molecules/StatisticListItem'
import React from 'react'
import { FiFlag } from 'react-icons/fi'

const StatisticList = () => {
  return (
    <div className="w-full px-8 py-6 bg-light rounded flex flex-col gap-5 md:flex-row md:justify-around md:items-center">
      <StatisticListItem icon={<FiFlag />} label="Pays" value="4" />
      <div className="w-full h-[1px] bg-borderLight md:w-[1px] md:min-h-[65px]"></div>
      <StatisticListItem icon={<FiFlag />} label="Clients" value="13" />
      <div className="w-full h-[1px] bg-borderLight md:w-[1px] md:min-h-[65px]"></div>
      <StatisticListItem icon={<FiFlag />} label="Staff" value="50-100" />
    </div>
  )
}

export default StatisticList
