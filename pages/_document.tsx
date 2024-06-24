import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head />
            <head>
                <link rel="preload" as="font" type="font/woff2" href="https://www.elo7.com.br/elo7-assets/museo-sans-100-webfont.woff2" />
            </head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}