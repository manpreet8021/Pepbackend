import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";
import WhyChoose from "@/components/block/BlockGuide";
import Block1 from "@/components/about/Block1";
import Counter from "@/components/counter/Counter";
import Team1 from "@/components/team/Team1";
import Testimonial from "@/components/testimonial/Testimonial";
import Counter2 from "@/components/counter/Counter2";
import Brand from "@/components/brand/Brand"; 
import Header1 from "@/components/header";

const About = () => {
  const block = [
    {
      id: 1,
      title: 'Redefining Happiness',
      subtitle: '',
      image: '/img/about/3.jpeg',
      body: 'Every day, the world tells us we\'re not enough. Not wealthy enough, slim enough, trendy enough, accomplished enough.<br />We\'re led to believe that happiness is just one purchase away, one perfect image on social media, one ideal relationship or physical change… Then we would be happy. But it\'s a lie.<br /> You are right where you are meant to be, and all that you need is already within you.',
      imageAlign: 'left'
    },
    {
      id:2,
      title: 'Pathways to Self-Discovery',
      subtitle: '… and now Yoga.',
      image: '/img/about/7.jpeg',
      body: 'This is the opening sentence of Patanjali\'s Yoga Sutras, which you could call the “bible” of yoga. It means you\'ve tried all kinds of things for your happiness. You turned in many directions. In the end they didn\'t work.... And now you\'ve found yoga.<br />While yoga is our foundation, we recognise there are many paths— meditation, plant medicine, art, community, dance, spirituality, nature, and travel—that lead to self-discovery. Each journey, whether through a serene landscape or a mindful retreat, guides us toward a wakeful life.',
      imageAlign: 'right'
    }
  ]

  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header1 background="white"/>
      {/* End Header 1 */}
      
      <section className="section-bg layout-pt-lg layout-pb-lg">
        <div className="custom-section col-12 ">
          <img
            width={1920}
            height={400}
            src="/img/about/6.JPG"
            alt="image"
            priority
          />
        </div>
        {/* End section-bg__item */}

        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <h1 className="text-40 md:text-25  text-white">
                .
              </h1>
              <div className="text-white mt-15">
                .
              </div>
            </div>
          </div>
        </div>
      </section>

      {
        block.map(item => (
          <section className="layout-pt-lg" key={item.id}>
            <div className="container">
              <div className={`row y-gap-30 justify-between items-center ${item.imageAlign === 'right' ? 'inverse' : ''}`}>
                <Block1 block={item}/>
              </div>
            </div>
          </section>
        ))
      }

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center">
            <div className="border-top-light mt-30 mb-30" />
            <div className="col-12">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title text-center">Soulcation's 5 Core Values</h2>
                <p className="text-dark-1 mt-30 lg:mt-40 md:mt-20">
                  We're totally aligned with the United Nations Sustainable Development Goals (SDGs) and deeply committed to ESG principles. We're here to share how we're turning our passion into purpose!
                </p>
              </div>
            </div>
            <div className="col-12 mt-30">
              <h2 className="text-20 fw-600">Green Travel (UN SDG 12: Responsible Consumption and Production)</h2>
              <p className="text-dark-1 mt-30 lg:mt-40 md:mt-20">
                We're committed to sustainable travel that leaves footprints of joy, not carbon because we want to keep our planet healthy and happy. Our goal is to reduce our environmental footprint and support sustainable tourism. Together, we can make sure that future generations get to enjoy the beauty of our world too. 
              </p>
            </div>
            <div className="col-12 mt-30">
              <h2 className="text-20 fw-600">Feel Good  (UN SDG 3: Good Health and Well-being)</h2>
              <p className="text-dark-1 mt-30 lg:mt-40 md:mt-20">
                Your well-being is our priority. We're here to help you find balance in mind, body, and spirit. Our retreats are designed to boost your overall wellness and help you live your best life. It's all about finding that sweet spot where you feel good inside and out. 
              </p>
            </div>
            <div className="col-12 mt-30">
              <h2 className="text-20 fw-600">Earth Stewards (UN SDG 15: Life on Land)</h2>
              <p className="text-dark-1 mt-30 lg:mt-40 md:mt-20">
                We believe in the magic of nature and want to help you connect with it. We focus on conserving and appreciating our natural world. Our retreats let you soak in the beauty and peace of nature. Let's explore, enjoy, and protect our planet together.
              </p>
            </div>
            <div className="col-12 mt-30">
              <h2 className="text-20 fw-600">Sustainable Soul (ESG Goals: Environment)</h2>
              <p className="text-dark-1 mt-30 lg:mt-40 md:mt-20">
              At Soulcation, sustainability is our middle name. We are paving the way for a greener tomorrow. We're not just talking the talk - we're walking the walk by planting trees to offset our carbon emissions.
              </p>
            </div>
            <div className="col-12 mt-30">
              <h2 className="text-20 fw-600">Community to Impact (ESG Goals: Social)</h2>
              <p className="text-dark-1 mt-30 lg:mt-40 md:mt-20">
                Our community thrives on being inclusive - everyone's welcome! All you need to start this journey is to be human. It's simple, really. And hey, remember, the world's just a bunch of people. Transform individuals, and you transform the world. So, Join our mindful crew and amp up that network effect for a brighter tomorrow!
              </p>
            </div>
          </div>
        </div>
      </section>
      

      {/* <section className="pt-60">
        <div className="container">
          <div className="border-bottom-light pb-40">
            <div className="row y-gap-30 justify-center text-center">
              <Counter />
            </div>
          </div>
        </div>
      </section> */}
      {/* End counter Section */}

      {/* <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Our Team</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>

          <div className=" pt-40 js-section-slider">
            <div className="item_gap-x30">
              <Team1 />
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="section-bg layout-pt-lg layout-pb-lg">
        <div className="section-bg__item -mx-20 bg-light-2" />
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Overheard from travelers
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden pt-80 js-section-slider">
            <div className="item_gap-x30">
              <Testimonial />
            </div>
          </div>

          <div className="row y-gap-30 items-center pt-40 sm:pt-20">
            <div className="col-xl-4">
              <Counter2 />
            </div>

            <div className="col-xl-8">
              <div className="row y-gap-30 justify-between items-center">
                <Brand />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Why Choose Us</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-50">
            <WhyChoose />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(About), { ssr: false });
