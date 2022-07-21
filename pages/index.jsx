import React from 'react';
import { Col, Row } from 'antd';
import Layout from '../components/layout.jsx'
import Sidebar from '../components/sidebar.jsx'
import Styles from '../styles/home.module.scss'

import Image from 'next/image'
import Logo from '../public/img/Shoes-logo.svg'
import promoUno from '../public/img/grupo-5.jpg'
import promoDos from '../public/img/grupo-6.jpg'
import promoTres from '../public/img/grupo-9.jpg'
import SportShoes from '../public/img/grupo-2.jpg'

export default function Index() {

  return (
    <section>
      <div className={Styles.banner} id='sidebar-coord'>
        <div>
            <div className={Styles.logoContent}>
              <Image
                src={Logo}
                alt="logo"
              />
            </div>
        </div>
      </div>
      <Row gutter={[0, 0]}>
        <Col xs={24} xl={12}>
          <div style={{width: '100%', height: '30rem', position: 'relative'}}>
            <Image
              src={promoUno}
              alt="promoUno"
              layout='fill'
              objectFit='cover'
            />
          </div>
        </Col>
        <Col xs={24} xl={12}>
          <div style={{width: '100%', height: '30rem', position: 'relative'}}>
            <Image
              src={promoDos}
              alt="promoDos"
              layout='fill'
              objectFit='cover'
            />
          </div>
        </Col>
      </Row>
      <div className='container'>
        <Row gutter={[20, 30]}>
          <Col xs={24} lg={12}>
          <div style={{width: '100%', height: '100%', minHeight: '30rem', position: 'relative'}}>
            <Image
              src={SportShoes}
              alt="SportShoes"
              layout='fill'
              objectFit='cover'
            />
          </div>
          </Col>
          <Col  xs={24} lg={12}>
            <h2>What is Lorem Ipsum?</h2>
            <p className="textjustify">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industryis standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a 
              type specimen book. It has survived not only five centuries, but also the 
              leap into electronic typesetting, remaining essentially unchanged. It was 
              popularised in the 1960s with the release of Letraset sheets containing Lorem 
              Ipsum passages, and more recently with desktop publishing software like Aldus 
              PageMaker including versions of Lorem Ipsum.</p>
            <p className="textjustify">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industryis standard dummy text ever since the 1500s,
              when an unknown printer took Letraset sheets containing Lorem 
              Ipsum passages, and more recently <strong>with desktop publishing software like Aldus 
              PageMaker including versions of Lorem Ipsum.</strong></p>
              <br />
              <p className="textjustify">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industryis standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a 
              type specimen book. It has survived not only five centuries, but also the 
              leap into electronic typesetting, remaining essentially unchanged. It was 
              popularised in the 1960s with the release of Letraset sheets containing Lorem 
              Ipsum passages, and more recently with desktop publishing software like Aldus 
              PageMaker including versions of Lorem Ipsum.</p>
          </Col>
        </Row>
      </div>
    
      <div className={Styles.imageSports}></div>
      <div className={Styles.containerDark}>
      <Row gutter={[20, 30]}>
          <Col xs={24} lg={12}>
            <div style={{width: '100%', height: '100%', minHeight: '40rem', position: 'relative', backgroundColor: '#38424a', padding: '3rem'}}>
              <Image
                src={promoTres}
                alt="promoTres"
                layout='fill'
                objectFit='cover'
              />
            </div>
          </Col>
          <Col xs={24} lg={12} className="dFlex flexColunm justifyCenter alignCenter">
            <h1 className="textCenter color-ffffff">What is Lorem Ipsum?</h1>
            <p className="textjustify textCenter color-ffffff">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industryis standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a 
              type specimen book. It has survived not only five centuries, but also the 
              leap into electronic typesetting, remaining essentially unchanged. It was 
              popularised in the 1960s with the release of Letraset sheets containing Lorem 
              Ipsum passages, and more recently with desktop publishing software like Aldus 
              PageMaker including versions of Lorem Ipsum.</p>
            <p className="textjustify textCenter color-ffffff">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industryis standard dummy text ever since the 1500s,
              when an unknown printer took Letraset sheets containing Lorem 
              Ipsum passages, and more recently <strong>with desktop publishing software like Aldus 
              PageMaker including versions of Lorem Ipsum.</strong></p>
              <br />
              <p className="textjustify textCenter color-ffffff">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industryis standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a 
              type specimen book. It has survived not only five centuries, but also the 
              leap into electronic typesetting, remaining essentially unchanged. It was 
              popularised in the 1960s with the release of Letraset sheets containing Lorem 
              Ipsum passages, and more recently with desktop publishing software like Aldus 
              PageMaker including versions of Lorem Ipsum.</p>
          </Col>
        </Row>
      </div>
    </section>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}