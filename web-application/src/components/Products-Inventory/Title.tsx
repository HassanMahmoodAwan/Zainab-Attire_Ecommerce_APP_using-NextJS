import React from 'react'
import Link from 'next/link';
import {Select, SelectSection, SelectItem} from "@nextui-org/select";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";

function Title({title}:{title:string}) {
    const SortingFilter = [
        "Popularity", "Rating", "Latest", "Low to High", "High to Low"
    ]
  return (
    <div id='Heading-Sorting' className='flex justify-between items-center'>
                <div id='Heading' className='space-y-3'>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <div>
                        <Breadcrumbs size='sm'>
                            <BreadcrumbItem>
                                <Link href={"/"}>
                                 Home
                                </Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>{title}</BreadcrumbItem>
                        </Breadcrumbs>
                    </div>
                </div>

                <div id='Sorting w-full'>
                  <Select
                     label="Sort By"
                     className="w-[250px] z-0">

                     {SortingFilter.map((sorting, index) => (
                       <SelectItem key={index} value={index}>
                         {sorting}
                       </SelectItem>
                     ))}
                   </Select>
                </div>
            </div> 
  )
}

export default Title
