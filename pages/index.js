import Card from "../components/Card"
import Content from "../components/Content"
import { NextSeo } from "next-seo"

export default function IndexPage() {
  return (<>
  <NextSeo title="Ceyhun Melek - Fullstack Developer" description="Too lazy to write something"/>
  <div className="flex flex-wrap h-screen content-center justify-center">
    <div className="max-w-lg bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex flex-col sm:flex-row">
        <Card />
        <Content />
      </div>
    </div>
  </div>
  </>

  )
}
