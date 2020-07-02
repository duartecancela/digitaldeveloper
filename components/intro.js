import { CMS_NAME } from '../lib/constants'
import { SITE_NAME } from '../lib/constants'
import Logo from '../components/logo'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
       <Logo /> <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        { SITE_NAME } </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
      Web Development, Audio And Computer Science.
      </h4>
    </section>
  )
}
