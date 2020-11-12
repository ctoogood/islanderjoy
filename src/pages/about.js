import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Hero from "../components/about/hero"
import Layout from "../components/layout"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "Web (10)" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Hero />
      <section
        className="uk-margin-large-top uk-padding-small uk-child-width-1-2@s"
        style={{ maxWidth: "1200px", margin: "auto" }}
        data-uk-grid
      >
        <div className="uk-text-center uk-text-left@s uk-flex-last@s">
          <p className="uk-margin-remove uk-text-muted">Islander Joy</p>
          <h2 className="uk-margin-remove">About Me</h2>
          <p>
            Enamel pin cornhole squid pug sartorial single-origin coffee.
            Portland lo-fi marfa pitchfork. Narwhal unicorn cray air plant
            post-ironic forage. Activated charcoal prism etsy portland, pork
            belly pabst wolf organic. Butcher franzen green juice, fashion axe
            brunch snackwave whatever tbh PBR&B listicle heirloom fixie beard
            knausgaard. Mustache la croix air plant butcher disrupt fixie
            pickled hella copper mug cred subway tile yr poutine. Leggings blog
            hoodie, yr poke bicycle rights brooklyn sriracha master cleanse
            affogato vegan. Chambray meggings post-ironic hexagon. Wolf
            mumblecore gentrify taiyaki schlitz, fingerstache chillwave health
            goth. Coloring book YOLO art party woke slow-carb wolf. Gochujang
            pug intelligentsia photo booth normcore polaroid iPhone migas. YOLO
            retro helvetica 90's mumblecore, lyft disrupt fanny pack celiac
            paleo DIY. Enamel pin scenester organic viral pour-over. Ennui paleo
            cred, leggings semiotics taxidermy meditation stumptown authentic
            synth tbh kitsch XOXO small batch. Narwhal master cleanse flannel
            coloring book small batch cloud bread la croix twee. Tousled bicycle
            rights disrupt portland. DIY fixie mixtape, hexagon listicle offal
            tousled flexitarian coloring book pabst ennui intelligentsia bicycle
            rights chillwave mustache. Pabst viral bicycle rights bitters,
            authentic unicorn dreamcatcher heirloom small batch godard.
          </p>
        </div>
        <div>
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
      </section>
    </Layout>
  )
}

export default About
