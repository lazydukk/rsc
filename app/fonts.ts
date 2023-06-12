import { Poppins, Rubik_Mono_One, Roboto_Mono } from "next/font/google";

export const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap'
})

export const rubik = Rubik_Mono_One({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-rubik-mono-one',
    display: 'swap'
})
export const roboto = Roboto_Mono({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-roboto-mono',
    display: 'swap'
})