import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

interface CategoryFilterProps{
    onCategoryChange: (Category: string) => void;
}
export const CategoryFilter = ({onCategoryChange}:CategoryFilterProps) => {
    const categories=['all','tech','health','sports','buisness','ai','india','nature','world']
  return (
    <div className="flex items-center justify-center gap-4 ">
        <h3 className="font-bold md:text-lg flex-shrink-0">Filter by Category:</h3>
        <Select onValueChange={(value)=> onCategoryChange(value === 'All' ? '' : value)}>
            <SelectTrigger className="w-[180px] rounded-md capitalize">
                <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
               {
                categories.map((category)=>(
                    <SelectItem key={category} value={category} className="capitalize">{category}</SelectItem>
                ))
               }
               
            </SelectContent>
            </Select>

    </div>
  )
}
