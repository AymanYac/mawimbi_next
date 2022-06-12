import Button from 'components/atoms/Button'
import LineDivider from 'components/atoms/LineDivider'
import BlogCard, { BlogCardProps } from 'components/molecules/Card/BlogCard'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Link from 'next/link'
import React from 'react'
import randomString from 'utils/randomString'

const Blog = () => {
  const blogListData: BlogCardProps[] = [
    {
      authorAvatarSrc: '/images/blog-author-2.webp',
      authorName: 'Amine Bekkali',
      launchDate: 'Mar 18',
      lead: 'L\'état de l\'art de la planification, gestion et maintenance prédictive des infrastructures énergétiques.',
      readTime: '5 min',
      thumbnailSrc: '/images/blog-thumbnail-1.webp',
      title: 'L\'électrification du parc automobile africain.',
    },
    {
      authorAvatarSrc: '/images/blog-author-2.webp',
      authorName: 'Amine Bekkali',
      launchDate: 'Mar 11',
      lead: 'Comprendre les défis et les leviers d\'accélartion économique en Afrique.',
      readTime: '3 min',
      thumbnailSrc: '/images/blog-thumbnail-2.webp',
      title: 'Les 10 grands chantiers pour une Afrique digitale.',
    },
    {
      authorAvatarSrc: '/images/blog-author-ab.png',
      authorName: 'Akram Bachiri',
      launchDate: 'Mar 10',
      lead: 'MawimbiTech offre son expertise dans l\'audit et la sanctuarisation des infrastructures de ses clients.',
      readTime: '20 min',
      thumbnailSrc: '/images/blog-thumbnail-3.webp',
      title: 'Une afrique vigilante face aux risques cyber.',
    },
    {
      authorAvatarSrc: '/images/blog-author-fo.png',
      authorName: 'Fassinou Ouandaogo',
      launchDate: 'Feb 20',
      lead: 'La R&D MawimbiTech co-publie deux articles sur la génération graphique par IA',
      readTime: '8 min',
      thumbnailSrc: '/images/blog-thumbnail-4.webp',
      title: 'MawimbiTech encourage les partenariats académiques.',
    },
    {
      authorAvatarSrc: '/images/blog-author-1.webp',
      authorName: 'Sanae Laalej',
      launchDate: 'Feb 23',
      lead: 'Focus sur les ressources humaines à la disposition de l\'ingénierie logicielle en Afrique.',
      readTime: '12 min',
      thumbnailSrc: '/images/blog-thumbnail-5.webp',
      title: 'La jeunesse africaine brille par son aisance sur les NTIC.',
    },
    {
      authorAvatarSrc: '/images/blog-author-km.png',
      authorName: 'Kawtar Mawas',
      launchDate: 'Jan 28',
      lead: 'Focus sur l\'avancée libérale des pays des pays de la Communauté économique des États de l\'Afrique de l\'Ouest.',
      readTime: '12 min',
      thumbnailSrc: '/images/blog-thumbnail-6.webp',
      title: 'Une voie pour la CEDEAO.',
    },
  ]
  return (
    <PageTemplate>
      <section className="grid place-items-center">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-uo">
          <PageSentence
            badge="BLOG"
            title="Notre équipe partage plus en détails les grandes orientations Mawimbi"
          />
        </div> 
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 sm:gap-x-5">
          {blogListData.map((data) => {
            return (
              <Link href="/blog/detail" key={randomString(64)}>
                <div data-aos="fade-up">
                  <BlogCard
                    authorAvatarSrc={data.authorAvatarSrc}
                    authorName={data.authorName}
                    launchDate={data.launchDate}
                    lead={data.lead}
                    readTime={data.readTime}
                    thumbnailSrc={data.thumbnailSrc}
                    title={data.title}
                  />
                </div>
              </Link>
            )
          })}
        </div>
        <div className="">
          <Button value='Load More' color='white' style='light' />
        </div>
      </section>
    </PageTemplate>
  )
}

export default Blog
