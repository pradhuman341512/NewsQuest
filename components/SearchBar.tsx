import { Input } from "./ui/input"
interface SearchBarProps{
    onSearch: (searchTerm: string) => void;
}

export const SearchBar = ({onSearch}:SearchBarProps) => {
  return (
    <div className='mb-4 p-12'>
    <h3 className='font-bold text-lg mb-2'>Search News</h3>
    <Input type="text" 
    onChange={(e) => onSearch(e.target.value)}
    placeholder='Search news...' 
    className='p-2 border rounded-md md:w-[800px] lg:w-[800px] '
    />
</div>
  )
}
