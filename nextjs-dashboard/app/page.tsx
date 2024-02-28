import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css'
import {inter,lusitana, workSans} from '@/app/ui/font'
import Image  from 'next/image';


const cityName=["Agra", "jabalpur"];

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo /> 
     
      </div>

      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Dashboard application.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              A Dashboard <br/>
            </a>
             checkout github @swapnilxi
          </p>
            {`restaruant in ${cityName[1]} `}
          <h1 className="text-blue-500">I'm Shape!</h1>
          <div className={styles.shape} />
          <h1 className={`text-blue-700 ${lusitana.className}`}>I'm in different font with styling !</h1>
          <h1 className={lusitana.className}>I'm in different font with no styling!</h1>


          <div className={styles.shape} />;

          <p className="m-6 p-8 text-lg font-medium shape">Your text content</p>
          <div
          className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
          />
          <div className="w-0 h-0 border-t-20 border-t-red-500 border-l-20 border-l-transparent border-r-20 border-r-transparent"></div>


          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
          <span>Log in</span> <ArrowRightIcon className="w-1 md:w-1" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
        </div>
      </div>
    </main>
  );
}
