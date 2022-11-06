import { FC } from 'react'
import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'

const Head: FC = () => {

    return (
        <>
            <DefaultSeo
                title="SimpleLab | Projeto experimental de importação de dados"
                titleTemplate="%s - SimpleLab"
                description={"SimpleLab - Projeto experimental de importação de dados"}
                openGraph={{
                    title: 'SimpleLab - Projeto experimental de importação de dados',
                    description: "SimpleLab - http://localhost:3000",
                    type: "website",
                    locale: "pt_BR",
                    url: "http://localhost:3000",
                    site_name: "SimpleLab",
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />
            <NextHead>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.cdnfonts.com/css/roboto" rel="stylesheet" />
                <link href="https://fonts.cdnfonts.com/css/outfit" rel="stylesheet" />
            </NextHead>
        </>
    )
}

export default Head
