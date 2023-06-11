import { JetBrains_Mono as FontMono, Inter as FontSans, Rubik_Mono_One as FontUpper } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontUpper = FontUpper({
  subsets: ["latin"],
  variable: "--font-upper",
  weight: "400"
})