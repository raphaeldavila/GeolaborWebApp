import Image from 'next/image'
import Link from 'next/link'
import Container from './style'
import { IMAGES, URLS } from '@utils/constants'

export default function Header() {

    return (
        <>
            <Container>
                <header>
                    <div className='header__content'>
                        <Link href={URLS.HOME.LINK}>
                            <Image
                                src={IMAGES.LOGO.SRC}
                                alt={IMAGES.LOGO.ALT}
                                width={IMAGES.LOGO.WIDTH}
                                height={IMAGES.LOGO.HEIGHT}
                            />
                        </Link>
                        <div>
                            <ul>
                                <li>
                                    <Link href={URLS.ABOUT.LINK}>
                                        {URLS.ABOUT.NAME}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
            </Container>
        </>
    )
}