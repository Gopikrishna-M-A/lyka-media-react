import React from 'react'
import '../App.css';
import { Layout } from 'antd';
import Header from './Header/Header';
import Home from './Home/Home';
import Service from './Service/Service';
import Work from './Work/Work';
import News from './News/News';
import Contact from './Contact/Contact';

const { Content } = Layout;

export default function landing() {
  return (
    <Layout>
      <Header />
      <Content>
        <Home id="section-home" className="section"/>
        <Service id="section-service" className="section"/>
        <Work id="section-work" className="section"/>
        <News id="section-news" className="section"/>
        <Contact id="section-contact" className="section"/>
      </Content>
    </Layout>
  )
}
