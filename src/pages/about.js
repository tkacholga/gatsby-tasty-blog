import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout pageTitle="About us">
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
      quisquam reiciendis saepe laudantium, hic quidem magnam eius ducimus rem
      modi tempore dolore consequatur beatae dolor, necessitatibus ex? Obcaecati
      perferendis repudiandae vel. Laborum laboriosam totam obcaecati harum
      itaque alias cum iusto.
    </p>
  </Layout>
)

export default AboutPage
