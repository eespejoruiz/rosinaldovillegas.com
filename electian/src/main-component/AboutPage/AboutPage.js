import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Features from '../../components/Features/Features';
import About from '../../components/about/about';
import MissionVission from '../../components/MissionVission/MissionVission';
import CampaignSection from '../../components/CampaignSection/CampaignSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';

const AboutPage = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'¿Quién soy?'} pagesub={'¿Quién soy?'} />
            <About/>
            <MissionVission/>
            <Features/>
            <CampaignSection />
            <CtaSection ctaClass={'wpo-cta-section-s2 pb-0'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
