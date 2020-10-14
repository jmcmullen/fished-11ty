import React from 'react'
import styled, { keyframes } from 'styled-components'

import DefaultLayout from '../components/layout/Default'
import Head from '../components/layout/Head'
import Aside from '../components/primitives/Aside'
import P from '../components/primitives/P'
import A from '../components/primitives/A'
import H2 from '../components/primitives/H2'
import H3 from '../components/primitives/H3'
import H4 from '../components/primitives/H4'
import Img from '../components/primitives/Img'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const StyledAside = styled(Aside)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: calc(${(props) => props.theme.spaceUnit} * 4);
  margin-bottom: calc(${(props) => props.theme.spaceUnit} * 4);
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  position: relative;

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`

const Hero = styled.div`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.colors.black};
  padding: calc(${(props) => props.theme.spaceUnit});
  background-color: ${(props) => props.theme.colors.grey200};

  @media screen and (min-width: 796px) {
    width: 75%;
    padding-right: 8rem;
    min-height: calc(100vh - 300px);
  }
`

const HeroBg = styled.div`
  display: none;
  position: absolute;
  width: 75%;
  height: 100%;
  padding: 1rem 1rem 0 0;
  background-color: ${(props) => props.theme.colors.grey200};
  height: calc(100vh - 300px);
  z-index: -1;
  transform: translateX(-50%);

  @media screen and (min-width: 796px) {
    display: block;
  }
`

const Features = styled.div`
  background-color: ${(props) => props.theme.colors.grey300};
  width: 100%;

  @media screen and (min-width: 796px) {
    top: 0;
    right: 0;
    height: calc(100vh - 400px);
    width: 60%;
    position: absolute;
    transform: translateX(50%);
    margin: 3.5rem 2rem 0 0;
    padding: 2rem;
  }
`

const StyledH2 = styled(H2)`
  font-size: 3rem;
  margin: 2rem 0;

  @media screen and (min-width: 796px) {
    margin-top: 3rem;
    font-size: 4.2rem;
  }
`

const StyledH3 = styled(H3)`
  margin: calc(${(props) => props.theme.spaceUnit} * 2) 0;

  @media screen and (min-width: 796px) {
    font-size: 3rem;
  }
`

const StyledH4 = styled(H4)`
  margin: calc(${(props) => props.theme.spaceUnit} * 2) 0;

  @media screen and (min-width: 796px) {
    font-size: 2rem;
  }
`

const CtaBtn = styled(A)`
  display: block;
  font-size: 1.4rem;
  width: 100%;
  padding: 0.5rem;
  margin: calc(${(props) => props.theme.spaceUnit} * 2) 0;
  background: black;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;

  @media screen and (min-width: 796px) {
    padding: 1rem 2rem;
    width: 300px;
  }
`

const Details = styled.div`
  margin: 2rem 1rem;

  @media screen and (min-width: 796px) {
    padding: 3rem 0;
  }
`

const Step = styled.div`
  margin: 2rem 0 4rem;

  @media screen and (min-width: 796px) {
    margin: 2rem 2.5rem 4rem 0;
  }
`

const StepImg = styled(Img)`
  max-width: 130px;
  margin: auto;
`

const StepH3 = styled(H3)`
  margin: 1rem 0 0.5rem;
`

const Row = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 796px) {
    flex-direction: row;
  }
`

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.grey200};
`

const StyledP = styled(P)`
  font-size: 1.3rem;
  max-width: 600px;
`

const Beta = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 796px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const BetaCta = styled.div`
  padding: 0 1rem 0.5rem;

  @media screen and (min-width: 796px) {
    margin-top: 1rem;
  }
`

export default function Index({ site, name }) {
  /**
   * site come from site.js data file in _data
   */

  const { title, slogan, github } = site

  return (
    <DefaultLayout
      head={<Head title={title} slogan={slogan} description={slogan} />}
      title={title}
    >
      <Container>
        <HeroBg />
        <Hero>
          <StyledH2>Phishing simulation &&nbsp;training</StyledH2>
          <StyledH3>Test, train and protect your employees</StyledH3>
          <P>
            Our cyber security awareness testing and training is the most
            effective way to beat phishing attacks against your company.
          </P>
          <CtaBtn href="https://app.fished.io/sign-up">Try for free</CtaBtn>
        </Hero>
        {/* <Features><H3>TESTING</H3></Features> */}
      </Container>

      <Container>
        <Details id="how-it-works">
          <StyledH3>How it works</StyledH3>
          <Row>
            <Step>
              <StepImg src="/img/build.png" alt="building campaign" />
              <StepH3>Build a phishing campaign</StepH3>
              <P>
                Choose from one of our optimized templates and create a phishing
                campaign in less than 5 minutes.
              </P>
            </Step>
            <Step>
              <StepImg src="/img/send.png" alt="sending campaign" />
              <StepH3>Send around your company</StepH3>
              <P>
                Import your employee emails, start the campaign and watch the
                open and click stats update in real time.
              </P>
            </Step>
            <Step>
              <StepImg src="/img/train.png" alt="training employees" />
              <StepH3>Provide instant training</StepH3>
              <P>
                If an employee fails to identify the phishing attempt, we'll
                provide instant training once they open the link.
              </P>
            </Step>
          </Row>
        </Details>
      </Container>
      <Wrapper>
        <Container>
          <Beta>
            <Details id="early-access">
              <StyledH3>Early access</StyledH3>
              <StyledP>
                We're currently looking for small businesses to join our beta
                test and help shape the direction of our product.
              </StyledP>
            </Details>
            <BetaCta>
              <CtaBtn href="https://app.fished.io/sign-up">
                Request access
              </CtaBtn>
            </BetaCta>
          </Beta>
        </Container>
      </Wrapper>
    </DefaultLayout>
  )
}
