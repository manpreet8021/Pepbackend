import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";
import Header1 from "@/components/header";

const Privacy = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header1 background="white" />
      {/* End Header 1 */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="tabs js-tabs">            
						<div className="tabs__content js-tabs-content" data-aos="fade">
              <h1 className="text-30 fw-600 mb-15"> Privacy policy</h1>
              <p className="text-15 text-dark-1 mt-5">This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from Soulcation.me (the “Site”).</p>

              <h2 className="text-16 fw-500 mt-20">PERSONAL INFORMATION WE COLLECT</h2>
              <p className="text-15 text-dark-1 mt-5">
                When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”
              </p>
              <p className="text-15 text-dark-1 mt-15">
                We collect Device Information using the following technologies:
                <ul className="list-disc">
                  <li>“Cookies” are data files placed on your device or computer and often include an anonymous unique identifier.</li>
                  <li>“Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</li>
                  <li>“Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.</li>
                </ul>
              </p>
              <p className="text-15 text-dark-1 mt-5">When you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number. We refer to this information as “Order Information.”</p>
              <p className="text-15 text-dark-1 mt-5">Email marketing (if applicable): With your permission, we may send you emails about our store, new products, and other updates. When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.</p>
              <h2 className="text-16 fw-500 mt-35">
                HOW DO WE USE YOUR PERSONAL INFORMATION?
              </h2>
              <p className="text-15 text-dark-1 mt-5">We use the Order Information collected to: Fulfill any orders placed through the Site (including processing your payment information, arranging the retreat, and providing you with invoices and/or order confirmations); Communicate with you; Screen orders for potential risk or fraud; and Provide you with relevant information or advertising relating to our products and services. We use the Device Information collected to help us: Screen for potential risk and fraud (with your IP address); Improve and optimize our Site, by generating analytics from our customers' interaction with the Site; and Assess the success of marketing and advertising campaigns.</p>
              <p className="text-15 text-dark-1 mt-5">
                The specific uses of information we collect will depend on factors including the nature of the information, the purpose and context of the collection, and applicable law. Uses include:
                <ul className="list-disc">
                  <li>Providing our services</li>
                  <li>Processing, evaluating, and responding to your requests, inquiries, and applications</li>
                  <li>Contacting you (such as by text message, email, prerecorded or automated phone calls, live phone calls, mail, push notifications, or messages on third-party platforms):</li>
                  <li>to provide transactional information (such as updates about purchased travel);</li>
                  <li>for marketing purposes</li>
                  <li>for any other purpose described in this Privacy Notice</li>
                  <li>Administering contests, sweepstakes, and events</li>
                  <li>Determining appropriate advertising channels and venues and to place ads on such channels and venues, including placing advertising on social networking sites</li>
                  <li>Measuring and managing the effectiveness of our advertising and marketing</li>
                  <li>Conducting surveys, and performing market research and data analytics</li>
                  <li>Creating aggregated or otherwise anonymized data, which we may use and disclose without restriction</li>
                  <li>Evaluating your job application and contacting you regarding possible employment</li>
                  <li>Verifying your identity, protecting against and preventing fraud, unauthorised activity, claims and other liabilities, and managing risk exposure (for example, monitoring our Wi-Fi networks for purposes such as security, abuse prevention, and network management)</li>
                  <li>Complying with and enforcing applicable legal requirements, industry standards and our policies and terms, such as our terms of use and contract of carriage</li>
                  <li>Operating, evaluating, and improving our business in other ways</li>
                </ul>
              </p>
              <h2 className="text-16 fw-500 mt-35">
                CONSENT
              </h2>
              <h3 className="text-16 fw-500 mt-15">How do you get my consent?</h3>
              <p className="text-15 text-dark-1 mt-5">When you provide us with personal information to complete a transaction, verify your credit card, place an order, and/or communicate to a 3rd party host on our platform, we imply that you consent to our collecting it and using it for that specific reason only.</p>
              <p className="text-15 text-dark-1 mt-5">If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.</p>
              <h3 className="text-16 fw-500 mt-15">How do I withdraw my consent?</h3>
              <p className="text-15 text-dark-1 mt-5">If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use, or disclosure of your information, at any time, by clicking delete profile at https://soulcation.co/profile or by contacting us at hello@soulcation.co.</p>
              <h3 className="text-16 fw-500 mt-15">SHARING YOUR PERSONAL INFORMATION</h3>
              <p className="text-15 text-dark-1 mt-5">We share your Personal Information with third parties to help us use your Personal Information, as described above. Some examples: Data backup companies, email service providers, Razorpay for payment processing - you can read more about how Razorpay  uses your Personal Information here: https://razorpay.com/privacy/capital/.</p>
              <p className="text-15 text-dark-1 mt-5">We also use Google Analytics to help us understand how our customers use the Site-you can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout.</p>
              <p className="text-15 text-dark-1 mt-5">Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>
              <p className="text-15 text-dark-1 mt-5">As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative's (“NAI”) educational page at https://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.</p>
              <p className="text-15 text-dark-1 mt-5">
                You can opt-out of targeted advertising by:
                <ul className="list-disc">
                  <li>FACEBOOK - https://www.facebook.com/settings/?tab=ads</li>
                  <li>GOOGLE - https://www.google.com/settings/ads/anonymous</li>
                </ul>
              </p>

              <h3 className="text-16 fw-500 mt-15">DO NOT TRACK</h3>
              <p className="text-15 text-dark-1 mt-5">Please note that we do not alter the Site's data collection and use practices when we see a 'Do Not Track' signal from your browser.</p>
              
              <h3 className="text-16 fw-500 mt-15">DISABLING COOKIES</h3>
              <p className="text-15 text-dark-1 mt-5">If you do not agree to the use of these cookies please disable them by following the instructions for your browser set out here or use the automated disabling tools where available below. Please note that some of the services will not function so well if cookies are disabled.</p>
              <p className="text-15 text-dark-1 mt-5">Where the organisation setting the cookie provides an automated disabling tool in respect of its cookie(s) we list the name of that organisation, the category of cookies it sets together with a link to its automated disabling tool. In all other cases, we list the names of the cookies themselves and their source at the date of this Cookies policy so that you can easily identify and disable them if you want through your browser controls.</p>
              <p className="text-15 text-dark-1 mt-5">Some browsers make it possible for you to signal that you do not want your internet browsing activity to be tracked. Disabling tracking may interfere with your use of the Website and the services provided on the Website.</p>
              <p className="text-15 text-dark-1 mt-5">After your initial visit to the site we may change the cookies we use. This cookie policy will always allow you to know who is placing cookies, for what purpose and give you the means to disable them so you should check it from time to time.</p>

              <h3 className="text-16 fw-500 mt-15">PAYMENT</h3>
              <p className="text-15 text-dark-1 mt-5">If you choose a direct payment gateway to complete your purchase, then the payment processor handles your credit card data. It is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS). Your purchase transaction data is stored only as long as is necessary to complete your purchase transaction. After completion, your purchase transaction information is deleted.</p>
              <p className="text-15 text-dark-1 mt-5">All direct payment gateways adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover.</p>
              <p className="text-15 text-dark-1 mt-5">PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.</p>

              <h3 className="text-16 fw-500 mt-15">THIRD-PARTY SERVICES</h3>
              <p className="text-15 text-dark-1 mt-5">In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.</p>
              <p className="text-15 text-dark-1 mt-5">However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.</p>
              <p className="text-15 text-dark-1 mt-5">For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.</p>
              <p className="text-15 text-dark-1 mt-5">In particular, remember that certain providers may be located in or have facilities that are located in a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.</p>
              <p className="text-15 text-dark-1 mt-5">As an example, if you are located in Canada and your transaction is processed by a payment gateway located in the United States, then your personal information used in completing that transaction may be subject to disclosure under United States legislation, including the Patriot Act.</p>
              <p className="text-15 text-dark-1 mt-5">Once you leave our website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website's Terms of Service.</p>

              <h3 className="text-16 fw-500 mt-15">DATA RETENTION</h3>
              <p className="text-15 text-dark-1 mt-5">When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.</p>

              <h3 className="text-16 fw-500 mt-15">SECURITY</h3>
              <p className="text-15 text-dark-1 mt-5">To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.</p>
              <p className="text-15 text-dark-1 mt-5">If you provide us with your credit card information, the information is encrypted using secure socket layer technology (SSL) and stored with AES-256 encryption. Although no method of transmission over the Internet or electronic storage is 100% secure, we follow all PCI-DSS requirements and implement additional generally accepted industry standards.</p>

              <h3 className="text-16 fw-500 mt-15">AGE OF CONSENT</h3>
              <p className="text-15 text-dark-1 mt-5">By using our site you represent, you are at least the age of majority in your country of residence, or you are the age of majority in your country of residence and you have given us your consent to allow any of your minor dependents to use this site.</p>

              <h3 className="text-16 fw-500 mt-15">CHANGES</h3>
              <p className="text-15 text-dark-1 mt-5">We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>

              <h3 className="text-16 fw-500 mt-15">QUESTIONS AND CONTACT INFORMATION</h3>
              <p className="text-15 text-dark-1 mt-5">For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by message at hello@soulcation.co.</p>
            </div>
						</div>
        </div>
      </section>
      {/* End terms section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Privacy), { ssr: false });