"use client"

import { Category } from "@prisma/client";

interface CategoriesProps {
    data: Category[];
}

export const Categories = () => ({
    data 
}: CategoriesProps) => {
    return (
        <div>
            Categories!
        </div>
    )
}