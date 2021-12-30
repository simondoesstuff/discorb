import React from 'react';
import {Button, Container, Navbar, NavbarBrand, Row, Col, Stack} from "react-bootstrap";
import s from '@/styles/NavFooterLayout.module.scss'

function NavFooterLayout({children}) {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
}

function Header() {
  return (
    <header className={s.yolo}>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavbarBrand>
            Discorb
          </NavbarBrand>

          Download
          Nitro
          Safety
          Support
          Blog
          Careers

          <Button>
            Login
          </Button>
        </Container>
      </Navbar>
    </header>
  )
}

function Footer() {
  return (
    <footer className={s.footer}>
      <Container fluid className={"bg-dark text-light " + s.footerContainer}>
        <Row>
          <Col className={s.footerTitle}>
            Imagine A Place
          </Col>
          <Col>
            <FooterLinks/>
          </Col>
        </Row>

        <Row>
          <Col>
            Discord
          </Col>
          <Col>
            <Button>
              Sign Up
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

const footerLinks = [
  ['Product', 'Download', 'Nitro', 'Status'],
  ['Company', 'About', 'Jobs', 'Branding', 'Newsroom'],
  ['Resources', 'College', 'Support', 'Safety', 'Blog', 'Feedback', 'Developers', 'StreamKit'],
  ['Policies', 'Terms', 'Privacy', 'Cookie', 'Settings', 'Guidelines', 'Acknowledgements', 'Licenses', 'Moderation'],
]

function FooterLinks() {
  const linkStacks = footerLinks.map(set => {
    let setTitle = set[0]
    set.shift()

    return (
      <>
        <Stack>
          <a className="text-primary">
            {setTitle}
          </a>
          <>
            {
              set.map(e => <><a>{e}</a></>)
            }
          </>
        </Stack>
      </>
    )
  })

  return (
    <Container>
        <Row>
          <Col>{<>{linkStacks[0]}</>}</Col>
          <Col>{<>{linkStacks[1]}</>}</Col>
        </Row>
        <Row>
          <Col>{<>{linkStacks[2]}</>}</Col>
          <Col>{<>{linkStacks[3]}</>}</Col>
        </Row>
    </Container>
  )
}

export default NavFooterLayout;