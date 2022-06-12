import LineDivider from 'components/atoms/LineDivider'
import TeamCard from 'components/molecules/Card/TeamCard'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
import LogoList from 'components/organisms/LogoList'
import StatisticList from 'components/organisms/StatisticList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <PageTemplate title="A propos - MawimbiTech">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        <aside className="w-full" data-aos="fade-down-right">
          <div className="w-full h-[480px] relative">
            <Image
              src={'/images/about-illustration.webp'}
              layout="fill"
              objectFit="contain"
              quality={80}
              alt="Programmers when coding in their laptop"
              
            />
          </div>
        </aside>
        <aside
          className="text-center sm:w-10/12 md:w-8/12 lg:w-full lg:text-left"
          data-aos="fade-up-left"
        >
          <PageSentence
            badge="Qui sommes nous ?"
            title="Nous sommes des accélérateurs africains"
            description={`Parler de nos connexions avec le tissu social africain, nos compétences multi-modales`}
          />
        </aside>
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge="En chiffres"
            title="X conseillers, Y ingénieurs, Z actifs de la société civile"
          />
        </div>
        <div className="w-full grid gap-14">
          <div data-aos="fade-right">
            <StatisticList />
          </div>
          <LogoList />
        </div>
      </section>
      <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge="Notre équipe"
            title="Les visages de MawimbiTech"
          />
        </div>
        <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-k.jpg"
              job="Cofounder, Finance Managing Director"
              name="Kawtar MAWAS"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-5.webp"
              job="Chief Technology Officer"
              name="Akram Bachiri"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-a.jpg"
              job="Cofounder, Managing Director"
              name="Ayman YACHAOUI"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-y.jpg"
              job="Chief Strategy Officer"
              name="Amine Bekkali"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-x.jpg"
              job="Chief Operations Officer"
              name="Sanae LAALEJ"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-6.webp"
              job="Data Solutions Officer"
              name="Fassinou OUANDAOGO"
            />
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default About
