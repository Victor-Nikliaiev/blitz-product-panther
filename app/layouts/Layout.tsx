import { ReactNode } from "react"
import { Head } from "blitz"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "blitzjs_pro_2"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-lg mx-auto">{children}</div>
    </>
  )
}

export default Layout
