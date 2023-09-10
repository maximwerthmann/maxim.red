import localFont from 'next/font/local'

const chomsky = localFont({
  src: './chomsky.woff2',
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className='flex flex-col items-center space-y-4'>
        <span className={`${chomsky.className} text-7xl`}>MaximSocial</span>
        <span className='text-xl font-bold'>coming soon...</span>
      </div>
    </main>
  )
}
