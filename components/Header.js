import Image from "next/image";

export default function Header() {
  return (
        <div className="flex items-center justify-between max-w-6xl">
            <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
                <Image
                    layout="fill"
                    className="object-contain"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJUjiTX51GbOltIaxmJE7Zk1Xjx1Sa2Q7sw&usqp=CAU"
                ></Image>
            </div>
            <div className="cursor-pointer h-24 w-10 relative lg:hidden">
                <Image
                    layout="fill"
                    className="object-contain"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
                ></Image>
            </div>


            <h1>Right side</h1>
        </div>
  )
}
