import { buttonVariants } from "@/components/ui/button"
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"

const MePng = "me.png"

export default function Home() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center p-8 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-16 space-y-8 md:space-y-0">
        <img className='rounded-full max-h-64 lg:max-h-96 size-auto relative animate-slide-right' src={MePng}/>
        <div className="pr-0 md:pr-8 lg:pr-16 space-y-8 md:space-y-12">
          <h1 className="text-6xl text-center md:text-left font-bold relative animate-slide-left">Maxim マクスイム</h1>
          <p className="text-lg text-center md:text-left relative animate-slide-left delay-100 opacity-0">17 y/o junior full-stack web developer and designer from Belgium.<br/> Passionate about creating beatiful and intuitive user experiences on the web<br/>using Next.js, Tailwind CSS and shadcn-ui.</p>
          <div className="space-x-4 flex items-center justify-center md:justify-start">
            <div className="opacity-0 relative animate-fade-up"><Link href='/projects' className={`${buttonVariants({variant:"default"})}`}>Projects</Link></div>
            <div className="opacity-0 relative animate-fade-up delay-200"><Link href='https://twitter.com/maximwerthmann' className={`${buttonVariants({variant:"outline"})} space-x-2`}><TwitterLogoIcon height={16}/> <span>Twitter</span></Link></div>
            <div className="opacity-0 relative animate-fade-up delay-500"><Link href='https://github.com/maximwerthmann' className={`${buttonVariants({variant:"outline"})} space-x-2`}><GitHubLogoIcon height={16}/> <span>Github</span></Link></div>
          </div>
        </div>
      </div>
    </section>
  )
}
