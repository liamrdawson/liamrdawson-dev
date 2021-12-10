import Link from 'next/link'
import Image from 'next/image'

const HomePage = () => {

    return ( 
        <>
             <div>I ❤️ SOUL 🎂 CAKE</div>
            <Image 
                src="/images/profile.jpg"
                height={200}
                width={200}
                alt="A picture of me having a tea."
            />
            <h1>
                Read{' '}
                <Link href='/blog/first-post'>
                    <a>
                        this Article!
                    </a>
                </Link>
            </h1>
        </>
    )
}

export default HomePage