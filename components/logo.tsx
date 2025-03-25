import Link from "next/link"

export const Logo = () => {
  return (
    <div className=" flex text-center justify-center" >
        <Link href="/">
        <h1 className=" flex text-3xl item-center justify-center font-bold">NewsQuest</h1>
        </Link>
    </div>
  )
}
