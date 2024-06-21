'use client'

import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const TermsConent = () => {
  return (
    <Tabs>
      <div className="row y-gap-30">
        <div className="col-lg-3">
          <div className="px-30 py-30 rounded-4 border-light">
            <TabList className="tabs__controls row y-gap-10 js-tabs-controls">
              <Tab className="col-12 tabs__button js-tabs-button">
                Terms of Use
              </Tab>
              <Tab className="col-12 tabs__button js-tabs-button">
                Privacy policy
              </Tab>
            </TabList>
          </div>
        </div>
        {/* End .col-lg-3 */}

        <div className="col-lg-9">
          <TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <h1 className="text-30 fw-600 mb-15">TERMS OF SERVICE</h1>
              <h2 className="text-16 fw-500">OVERVIEW</h2>
              <p className="text-15 text-dark-1 mt-5">Throughout the site, the terms “we”, “us” and “our” refer to Soulcation. Soulcation offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>
              <p className="text-15 text-dark-1 mt-5">By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.</p>
              <p className="text-15 text-dark-1 mt-5">Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.</p>
              <p className="text-15 text-dark-1 mt-5">Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.</p>

              <h2 className="text-16 fw-500 mt-35">
                SECTION 1 - ONLINE MARKETPLACE TERMS
              </h2>
              <p className="text-15 text-dark-1 mt-5">By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</p>
              <p className="text-15 text-dark-1 mt-5">You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).</p>
              <p className="text-15 text-dark-1 mt-5">You must not transmit any worms or viruses or any code of a destructive nature.</p>
              <p className="text-15 text-dark-1 mt-5">A breach or violation of any of the Terms will result in an immediate termination of your Services.</p>

              <h2 className="text-16 fw-500 mt-35">
                SECTION 2 - GENERAL CONDITIONS
              </h2>
              <p className="text-15 text-dark-1 mt-5">We reserve the right to refuse service to anyone for any reason at any time.</p>
              <p className="text-15 text-dark-1 mt-5">You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.</p>
              <p className="text-15 text-dark-1 mt-5">You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.</p>
              <p className="text-15 text-dark-1 mt-5">The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.</p>

              <h2 className="text-16 fw-500 mt-35">
                SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION
              </h2>
              <p className="text-15 text-dark-1 mt-5">We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.</p>
              <p className="text-15 text-dark-1 mt-5">This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.</p>
              
              <h2 className="text-16 fw-500 mt-35">
                SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES
              </h2>
              <p className="text-15 text-dark-1 mt-5">Prices for our products are subject to change without notice.</p>
              <p className="text-15 text-dark-1 mt-5">We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.</p>
              <p className="text-15 text-dark-1 mt-5">We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.</p>
              
              <h2 className="text-16 fw-500 mt-35">
                SECTION 5 - PRODUCTS OR SERVICES (if applicable)
              </h2>
              <p className="text-15 text-dark-1 mt-5">Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Cancellation Policy.</p>
              <p className="text-15 text-dark-1 mt-5">We have made every effort to display as accurately as possible the colors and images of our products that appear on the site. We cannot guarantee that your computer monitor's display of any color will be accurate.</p>
              <p className="text-15 text-dark-1 mt-5">We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at any time without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.</p>
              <p className="text-15 text-dark-1 mt-5">We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.</p>

              <h2 className="text-16 fw-500 mt-35">
                SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION
              </h2>
              <p className="text-15 text-dark-1 mt-5">We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.</p>
              <p className="text-15 text-dark-1 mt-5">You agree to provide current, complete and accurate purchase and account information for all purchases made on our site. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.</p>
              
              <h2 className="text-16 fw-500 mt-35">
                SECTION 7 - OPTIONAL TOOLS
              </h2>
              <p className="text-15 text-dark-1 mt-5">We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.</p>
              <p className="text-15 text-dark-1 mt-5">You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.</p>
              <p className="text-15 text-dark-1 mt-5">Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).</p>
              <p className="text-15 text-dark-1 mt-5">We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.</p>

              <h2 className="text-16 fw-500 mt-35">
                SECTION 8 - THIRD-PARTY LINKS
              </h2>
              <p className="text-15 text-dark-1 mt-5">Certain content, products and services available via our Service may include materials from third-parties.</p>
              <p className="text-15 text-dark-1 mt-5">Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.</p>
              <p className="text-15 text-dark-1 mt-5">We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.</p>
              
              <h2 className="text-16 fw-500 mt-35">
                SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS
              </h2>
              <p className="text-15 text-dark-1 mt-5">If, at our request, you send certain specific submissions (for example contest entries, photos) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.</p>
              <p className="text-15 text-dark-1 mt-5">We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party's intellectual property or these Terms of Service.</p>
              <p className="text-15 text-dark-1 mt-5">You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.</p>
              
              <h2 className="text-16 fw-500 mt-35">
                SECTION 10 - PERSONAL INFORMATION
              </h2>
              <p className="text-15 text-dark-1 mt-5">Your submission of personal information through the site is governed by our Privacy Policy. To view our <Link href={'/privacy'}>Privacy Policy</Link>.</p>

              <h2 className="text-16 fw-500 mt-35">
                SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS
              </h2>
              <p className="text-15 text-dark-1 mt-5">Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).</p>
              <p className="text-15 text-dark-1 mt-5">We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.</p>
              
              <h2 className="text-16 fw-500 mt-35">
                SECTION 12 - PROHIBITED USES
              </h2>
              <p className="text-15 text-dark-1 mt-5">In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses</p>

              <h2 className="text-16 fw-500 mt-35">
                SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY
              </h2>
              <p className="text-15 text-dark-1 mt-5">We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.</p>
              <p className="text-15 text-dark-1 mt-5">We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.</p>
              <p className="text-15 text-dark-1 mt-5">You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.</p>
              <p className="text-15 text-dark-1 mt-5">You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.</p>
              <p className="text-15 text-dark-1 mt-5">In no case shall Soulcation, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.</p>
              <p className="text-15 text-dark-1 mt-5">In no case shall Soulcation be liable for any costs incurred due to cancellation of events from either party as well as due to Acts of God such as natural disasters and other events outside human control.</p>

              <h2 className="text-16 fw-500 mt-35">
                SECTION 14 - INDEMNIFICATION
              </h2>
              <p className="text-15 text-dark-1 mt-5">You agree to indemnify, defend and hold harmless Soulcation and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys' fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.</p>

              <h2 className="text-16 fw-500 mt-35">
                SECTION 15 - SEVERABILITY
              </h2>
              <p className="text-15 text-dark-1 mt-5">In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.</p>
              
              <h2 className="text-16 fw-500 mt-35">
                SECTION 16 - TERMINATION
              </h2>
              <p className="text-15 text-dark-1 mt-5">The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.</p>
              <p className="text-15 text-dark-1 mt-5">These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.</p>
              <p className="text-15 text-dark-1 mt-5">If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).</p>
              
              <h2 className="text-16 fw-500 mt-35">
                SECTION 17 - ENTIRE AGREEMENT
              </h2>
              <p className="text-15 text-dark-1 mt-5">The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.</p>
              <p className="text-15 text-dark-1 mt-5">These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).</p>
              <p className="text-15 text-dark-1 mt-5">Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.</p>
              
              <h2 className="text-16 fw-500 mt-35">
                SECTION 18 - GOVERNING LAW
              </h2>
              <p className="text-15 text-dark-1 mt-5">These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of India's Govt.</p>
              
              <h2 className="text-16 fw-500 mt-35">
                SECTION 19 - CHANGES TO TERMS OF SERVICE
              </h2>
              <p className="text-15 text-dark-1 mt-5">You can review the most current version of the Terms of Service at any time at this page.</p>
              <p className="text-15 text-dark-1 mt-5">We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.</p>
              
              <h2 className="text-16 fw-500 mt-35">
                SECTION 20 - PAYMENTS AND PAYOUTS
              </h2>
              <ul className="list-disc">
                <li className="mt-15">For Guests</li>
                  <h3 className="text-16 fw-500 mt-15">Payments</h3>
                  <p className="text-15 text-dark-1 mt-5">All payments will be converted to INR at the time of completing the booking..We allow you to make the full payment or a deposit payment at the time of booking, please note all these options may not be available depending on the listing you have chosen.</p>
                  <p className="text-15 text-dark-1 mt-5">We use the standard currency exchange rate at the time of your booking. Please be aware that the exchange rate used on your payment option may be different based on the card or account you use. For specific details check with your card or account provider prior to making payment.</p>

                  <h3 className="text-16 fw-500 mt-15">Payments made with Voucher or Gift Card</h3>
                  <p className="text-15 text-dark-1 mt-5">If you have a voucher or gift card from Soulcation you can use all or a portion of that towards your payment at the time of booking. Please note the booking must be made with the account the voucher or gift card is connected with.</p>
                <li className="mt-15">For Hosts</li>
                  <h3 className="text-16 fw-500 mt-15">Commission</h3>
                  <p className="text-15 text-dark-1 mt-5">We charge a standard 15% commission on the total booking amount for guests that found you through our platform. This commission is charged on the total package, including add ons and/or extras that are booked at any point after the initial booking.</p>

                  <h3 className="text-16 fw-500 mt-15">Payouts</h3>
                  <p className="text-15 text-dark-1 mt-5">Once the guest has paid the chosen amount for their booking we hold the money received in escrow until their arrival date.</p>
                  <p className="text-15 text-dark-1 mt-5"><span className="underline">Minimum Deposit Listing</span>- If you have the minimum deposit set for your listing, the deposit amount will cover the amounts owed to us, resulting in no payout made to you. You are responsible for acquiring the remaining balance from the guest.</p>
                  <p className="text-15 text-dark-1 mt-5"><span className="underline">Other Deposit Listing</span>- If you have more than the minimum deposit set for your listing. We will calculate the amount for us and the payout balance to you. Once you have confirmed arrival for the guests' we will schedule your payout for the next payout round. You are responsible for acquiring the remaining balance from the guest.</p>
                  <p className="text-15 text-dark-1 mt-5"><span className="underline">Full Payment Listing</span>- If you have the full payment option set for your listing. We will calculate the amount for us and the payout balance to you. Once you have confirmed arrival for the guests' we will schedule your payout for the next payout round.</p>
                  <p className="text-15 text-dark-1 mt-5"><span className="underline">Calculating Payouts</span>- Our commission, the payment processing fee is kept from the payment made by the guest at the time of booking. We will calculate the amount for us and payout the balance due to you per the payout schedule below.</p>
                  <p className="text-15 text-dark-1 mt-5">If the available payouts for a payout round do not reach a minimum balance of ₹2000 we will hold the payout until this minimum is reached. Saving transfer fees for you. If you'd like to receive your payout earlier, please contact our support team.</p>
                  <p className="text-15 text-dark-1 mt-5">The host must confirm the guests' arrival at the center to release the payout. If the arrival is not confirmed the payout will stay in escrow until confirmed and will be paid out on the next payout round.</p>
                  <p className="text-15 text-dark-1 mt-5">Payouts are made twice a month, on the 1st and 15th. Payouts made on the 1st of the month are for bookings who arrived between the 14th and 29th of the previous month. Payouts made on the 15th of the month are for bookings who arrived between the 30th of the previous month and the 13th of the current month.</p>
                  <p className="text-15 text-dark-1 mt-5">We will default to paying retreat owners in ₹ (INR). Payments received from various currencies are converted at the time of booking to ₹ at the exchange rate at the time of booking. We then default to paying out in ₹ from that converted amount.</p>
                  <p className="text-15 text-dark-1 mt-5">There may be situations in which we payout in ₹ and it can be converted to a retreat owner's local currency, but this is at our discretion. We are not responsible in any way for fluctuations in currency exchanges, nor are they set by us.The retreat owner will cover the payout fee when we send the money over. We have the discretion to change the methods of payout at any time.</p>

                  <h3 className="text-16 fw-500 mt-15">Direct Bookings</h3>
                  <p className="text-15 text-dark-1 mt-5">If the guest finds you through our site and pays you directly, we expect you to share the booking details with us immediately on the platform. Once we receive the details from you via our platform, we will send you an invoice for our 15% commission. All invoices are due to be paid on the day of the guests arrival date (10 days net).</p>

                  <h3 className="text-16 fw-500 mt-15">Late Payment Fee</h3>
                  <p className="text-15 text-dark-1 mt-5">If an invoice is not paid within 10 days of the due date, a late payment fee of 5% of the total invoice amount will have to be charged. If an invoice still isn't paid 30 days after the due date, a late payment fee of 10% of the total invoice amount will have to be charged.</p>
                  <p className="text-15 text-dark-1 mt-5">Whenever possible, we will try to minimize transactions by matching outstanding invoices with upcoming payouts. This saves transaction fees for you.</p>

                  <h3 className="text-16 fw-500 mt-15">Payment Processing</h3>
                  <p className="text-15 text-dark-1 mt-5">Payments made through our platform incur a 2% - 3% payment processing fee imposed by the payment processing providers. The payment processing fee of 2% - 3% on the payment made by the guests' will be deducted when we calculate the payout to the retreat owner.</p>
                  
              </ul>

              <h2 className="text-16 fw-500 mt-35">
                SECTION 21 - LOWEST PRICE GUARANTEE
              </h2>
              <p className="text-15 text-dark-1 mt-5">If a retreat owner lists a retreat on Soulcation, they are not allowed to list it for a lower price elsewhere. By listing a retreat here, retreat owners are stating and agree that this is the lowest price they offer on the retreat. Why do we have this clause?</p>
              <p className="text-15 text-dark-1 mt-5">Because we work extremely hard here at Soulcation to help bring you customers. We've set up a situation in which we give you ₹10,000 if you give us ₹1000. I think you'd have to agree that it's a great deal for any business, no?</p>
              <p className="text-15 text-dark-1 mt-5">But listing a retreat on our site, and then selling it for a lower price elsewhere impedes our ability to provide this wonderful service to you. It undermines the trust our visitors place in us, and you.</p>
              <p className="text-15 text-dark-1 mt-5">We're here as a family, and part of being a family is recognizing the contributions of every member. We wouldn't be here without you, and we're here to help your business thrive.</p>
              <p className="text-15 text-dark-1 mt-5">Let's work together on this as a team, because we're all here for the same purpose: to help make the world a better place.</p>

              <h2 className="text-16 fw-500 mt-35">
                SECTION 22 - BEST PRICE GUARANTEE TERMS
              </h2>
              <p className="text-15 text-dark-1 mt-5">Best Price Guarantee - If you find a lower rate on Soulcation or on another website by 23:59 local time the day before your retreat, inform us and we will help you get that price. Our retreat owners are not allowed to put a higher price on our site than they have listed elsewhere for the same retreat.</p>
              <p className="text-15 text-dark-1 mt-5">Submitting a Claim - You are required to send an email at hello@soulcation.co by 23:59 local time the day before your retreat starts. If you've found a lower price, it has to be available for booking at the time you contact us. This is determined by our support team.</p>
              <p className="text-15 text-dark-1 mt-5">Sameness of the Retreat - Our Best Price Guarantee is available only for exact itinerary matches, including retreat, room type, cancellation policy, and the date of travel as booked through Soulcation. Also, the sameness must be to the exact same retreat purchased on its own through another website. For example, if you book a retreat on another website as part of a special package it won't be eligible for our Best Price Guarantee. Our Best Price Guarantee applies to the cost of a booked retreat or experience, as presented on your booking confirmation receipt, including any taxes and fees collected by us from you at the time of your booking. The Best Price Guarantee does not apply to any taxes or fees collected by any third party from you. Our Best Price Guarantee isn't available if you book a retreat or experience on another website, and the price of that booking isn't known until after your purchase. In addition, if there are requirements to be eligible for the lower price, including and without limitation: residency, regional and age, you must meet every single one of these requirements.</p>
              <p className="text-15 text-dark-1 mt-5">Lower price must be available to the general public - In order to be eligible for Our Best Price Guarantee, the prices must be both advertised and available to the general public. The following terms also apply for our Best Price Guarantee: the guarantee does not apply to rates offered on competitors' membership program websites; corporate discounts or rates; group, charter, rewards program, incentive, meeting, convention, consolidator or interline prices; prices obtained via auction or similar process; or prices available only by using a coupon or other promotion not offered to the general public. In addition, the lower price can't come from a website where a call is required to get the rate, or from an email that you received.</p>
              <p className="text-15 text-dark-1 mt-5">Verifying your claim - All claim requests are subject to verification by Soulcation. We don't accept screenshots or other purported evidence of a lower price that we at Soulcation can't confirm independently. We will not verify any request that we believe, in our sole discretion, is the result of a printing or other error or is made fraudulently or in bad faith.</p>
              <p className="text-15 text-dark-1 mt-5">Getting your refund for a verified claim - If your request is verified, you will receive a credit to the credit card that you used for your reservation. Where you have paid for your retreat at the time of booking, we will send your refund upon verification of your request. Where you have chosen to pay later at the retreat center, you will pay the center the original price upon arrival and we will send your refund after you have completed your stay. Please be aware that it may take up to 30 days or the next billing cycle for your refund to appear on your credit card statement.</p>
              <p className="text-15 text-dark-1 mt-5">Right to change - We at Soulcation reserve the right in our sole discretion to modify or discontinue the Best Price Guarantee or to restrict its availability to any person, at any time, for any or no reason, and without prior notice or liability to you. Your eligibility under the Best Price Guarantee is determined by the terms that are in effect at the time of your claim. Our failure to enforce any provision of these Terms & Conditions shall not constitute a waiver of that provision.</p>

              <h2 className="text-16 fw-500 mt-35">
                SECTION 23 - INTERNATIONAL TRAVEL
              </h2>
              <p className="text-15 text-dark-1 mt-5">You have the responsibility for the following: you meet all requirements of foreign entry, and your necessary documents for travel (passports, visa, and others) are valid and organized for foreign entry. Soulcation does not have unique understanding or knowledge of your necessary documents for travel, or the foreign entry requirements. We strongly encourage you to check any prohibitions on travel, different warnings, general announcements, and advisories that the government of your travel destination has issued. We encourage you to check this before booking your retreat and itinerary.</p>
              <p className="text-15 text-dark-1 mt-5">Visas and Passports: For this information you should contact the respective Embassy or Consulate for your travels. Change in requirements happen and you should always double check to make sure all your information is current before booking your retreat and leaving on your flight. We accept no liability in the event the airline or airport refused to grant you entry onto the flight, or if you are not allowed into a country due to a lack of proper requirements such as a passport, visa, or other documents that might be required for travel. This also applies for countries which may not be your final destination, but just stop-gaps. This includes any situation in which an aircraft stops, even if you stay in the plane or airport.</p>
              <p className="text-15 text-dark-1 mt-5">Health: You must consult with your doctor for the necessary and encouraged inoculations for your travel. Do this before you depart. You have responsibility for the following: taking any and all recommended medications, receiving the required inoculations, meeting entry requirements for health, and following medical advice given for your travel.</p>
              <p className="text-15 text-dark-1 mt-5">Soulcation offers retreats and other products in other countries, but this does not represent or warrant that travel to these areas is either risk-free or even advised. Soulcation is not liable for any losses or damages that may occur or result from traveling to these locations.</p>

              <h2 className="text-16 fw-500 mt-35">
                SECTION 24 - CURRENCY CONVERTER
              </h2>
              <p className="text-15 text-dark-1 mt-5">The following terms and conditions apply to any currency conversion or displays on our website: The respective currency rates come from sources that are available to the public, including the RBI and are to be used only as guidelines. These currency rates have not been verified, nor are we promising they are accurate. The actual currency rates may vary. These rates may or may not be updated daily. The information regarding currency rates is believed to be accurate, but Soulcation does not guarantee or warrant the accuracy of them. If you use these currency rates for any financial purpose, you should first consult a professional in the finance arena to verify that the rates are accurate. You are not authorized to use the currency rates or other information relating to it for any purpose outside of your own personal use. You are expressly prohibited from redistributing, reselling, or using this information for any commercial purposes.</p>
              
              <h2 className="text-16 fw-500 mt-35">
                SECTION 25 - PHOTO SUBMISSION GUIDELINES
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                If you submit any photos they must be:
                <ol className="list-number">
                  <li>On an appropriate topic: All your photos must be relevant to your retreat, location, surrounding area, housing and accommodation, or other closely relevant topics.</li>
                  <li>
                    Friendly to families and the overall community:
                    <ol className="list-number">
                      <li>No photos should be submitted that are: not legal, vulgar, pornographic, obscene, or offensive/insulting.</li>
                      <li>No photos should be submitted that: are an invasion of privacy of another person or entity, or violate any personal rights.</li>
                      <li>No photos or information should be submitted that are: of children or any third parties without receiving prior consent. If a child is under 13 their parents can give consent.</li>
                      <li>You must be above 13 to submit photos or other submissions to our site.</li>
                    </ol>
                  </li>
                  <li>Original photos: Only photos that you own or own the proper rights to can be submitted. No other photos are allowed to be submitted. Submitting photos from other sources is not allowed. No photos should be submitted that infringe upon any trademark, copyright, or any other right of a third party.</li>
                  <li>Non-commercial: No photos should be submitted that include any content that's intended for a commercial purpose. This includes logos, promotional photos, and branding material.</li>
                  <li>No harmful files No photos should be submitted that: are intended or result in damage to computers, servers, or any property of Soulcation or anyone using Soulcation. Viruses and any harmful code being submitted is strictly prohibited.</li>
                </ol>
              </p>
              
              <h2 className="text-16 fw-500 mt-35">
              SECTION 26 - NOTICE OF INFRINGING MATERIAL
              </h2>
              <p className="text-15 text-dark-1 mt-5">If it is your belief, and this belief is held in good faith that certain materials hosted by Soulcation infringe your copyright, you can send us a written notice including the information below. You must know that we will not process any complaints that are incomplete or improperly filled out. You may be exposed to liability for damages if you have misrepresentations in your notice about whether certain content or activity is infringing.</p>
              <p className="text-15 text-dark-1 mt-5">
                <ol className="list-number">
                  <li>You must show the copyrighted work you are claiming was infringed. You must show clear identification.</li>
                  <li>You must show the material on the website with a clear identification, such as a link to the infringing material in question.</li>
                  <li>You must include a statement that you clearly have a “good faith belief that the material that is claimed as copyright infringement is not authorized by the copyright owner, its agent, or the law.”</li>
                  <li>You must include a statement that "the information in the notification is accurate, and under penalty of perjury, the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed."</li>
                  <li>You must include your telephone number, your full address, and your email address.</li>
                  <li>You must include a signature from the owner of an exclusive right that is allegedly infringed, or the person who is authorized to act on the behalf of the owner of the exclusive right that is allegedly infringed.</li>
                </ol>
                You can send your notice to us via email <a href="mailto:namaste@soulcation.co">namaste@soulcation.co</a>
              </p>
              <p className="text-15 text-dark-1 mt-5">It is Soulcation's policy, in appropriate circumstances, to terminate the accounts of users who are repeat infringers or are repeatedly charged with infringement.</p>
              
              <h2 className="text-16 fw-500 mt-35">
                SECTION 27 - REVIEWS, COMMENTS, PHOTOS AND OTHER SUBMISSIONS
              </h2>
              <p className="text-15 text-dark-1 mt-5">Be aware of this: by submitting content to this Website by electronic mail, postings on this Website or otherwise, including any hotel reviews, photos, videos, questions, comments, suggestions, ideas or the like contained in any submissions (collectively, "Submissions"), you grant Soulcation and the affiliated, co-branded and/or linked website partners through whom we provide service, a nonexclusive, royalty-free, perpetual, transferable, irrevocable and fully sub-licensable right to (a) use, reproduce, modify, adapt, translate, distribute, publish, create derivative works from and publicly display and perform such Submissions throughout the world in any media, now known or hereafter devised; and (b) use the name that you submit in connection with such Submission. You acknowledge that the Soulcation may choose to provide attribution of your comments or reviews (for example, listing your name and hometown on a hotel review that you submit) at our discretion, and that such submissions may be shared with our supplier partners.</p>
              <p className="text-15 text-dark-1 mt-5">You further grant Soulcation the right to pursue at law any person or entity that violates your or the Soulcation' rights in the Submissions by a breach of these Terms of Use. You acknowledge and agree that Submissions are non-confidential and non-proprietary. You expressly waive any and all ‘moral rights' (including rights of attribution or integrity) that may subsist in your Submissions and agree that you have no objection to the publication, use, modification, deletion or exploitation of your Submissions by us, Soulcation affiliates or any of our partners or licensees. We take no responsibility and assume no liability for any Submissions posted or submitted by you. We have no obligation to post your comments; we reserve the right in our absolute discretion to determine which comments are published on the Website. If you do not agree to these Terms of Use, please do not provide us with any Submissions.</p>
              <p className="text-15 text-dark-1 mt-5">You are fully responsible for the content of your Submissions, (specifically including, but not limited to, reviews posted to this Website). You are prohibited from posting or transmitting to or from this Website: (i) any unlawful, threatening, libelous, defamatory, obscene, pornographic, or other material or content that would violate rights of publicity and/or privacy or that would violate any law; (ii) any commercial material or content (including, but not limited to, solicitation of funds, advertising, or marketing of any good or services); and (iii) any material or content that infringes, misappropriates or violates any copyright, trademark, patent right or other proprietary right of any third party. You shall be solely liable for any damages resulting from any violation of the foregoing restrictions, or any other harm resulting from your posting of content to this Website.But listing a retreat on our site, and then selling it for a lower price elsewhere impedes our ability to provide this wonderful service to you. It undermines the trust our visitors place in us, and you.</p>
              <p className="text-15 text-dark-1 mt-5">You acknowledge that Soulcation may exercise its rights (e.g. use, publish, delete) to any content you submit without notice to you. If you submit more than one review for the same hotel, only your most recent submission is eligible for use.</p>
              <p className="text-15 text-dark-1 mt-5">Every now and then we may offer our customers certain incentives to leave reviews for retreats, centers or teachers. These can be credits, coupons, contest entries or others. We are fiercely in support of impartial, fair, and honest reviews, so the previously mentioned incentives are made available to customers no matter the rating they end up giving.</p>
              <p className="text-15 text-dark-1 mt-5">We might invite you to leave reviews of our service or your experience on our site or on third-party platforms. By accepting the request to leave the review on our site or third-party platforms, you are giving express written consent for us to use these reviews.</p>

              <h2 className="text-16 fw-500 mt-35">
                SECTION 28 - CANCELLATION POLICY
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                We define two cancellation policies that apply to all retreats purchased on our site:
                <ol className="list-number">
                  <li>
                    Standard Policy
                    <ul>
                      <li>100% deposit refund for cancellation 60+ days before retreat start date.</li>
                      <li>50% deposit refund for cancellation 30-59 days before retreat start date.</li>
                      <li>0% deposit refund for cancellation 0-29 days before retreat start date.</li>
                    </ul>
                  </li>
                  <li>
                    Custom Policy
                    <ul>
                      <li>Retreat or Experience hosts can set their own cancellation policies, which can vary widely. Some may offer full refunds for cancellations made within a certain timeframe, while others may have stricter policies with penalties for cancellations. So be sure to read the retreat terms carefully before booking.</li>
                    </ul>
                  </li>
                </ol>
              </p>
              <p>
                <ul>
                  <li className="mt-15">
                    For Hosts
                    <h3 className="text-16 fw-500 mt-15">Cancellation within 48 hours of Booking</h3>
                    <p className="text-15 text-dark-1 mt-5">We expect our hosts to reply to all bookings done through our platform within 24 hours. Please confirm the reservation directly within the platform. If for any reason you are unable to accept the booking, please communicate immediately to us.</p>
                    <p className="text-15 text-dark-1 mt-5">We provide the guests with a 48 hour grace period to cancel their booking. If a guest asks to cancel their booking within this grace period they will receive a full refund of their deposit or amount paid.</p>
                    <p className="text-15 text-dark-1 mt-5">After the 48 hour grace period, the cancellation policy, set by you, for your listing will go into full effect.</p>

                    <h3 className="text-16 fw-500 mt-15">Customer Complaints/Disputes</h3>
                    <p className="text-15 text-dark-1 mt-5">In case of a dispute of the deposit, Soulcation submits all the available evidence to the cardholder's bank. We also inform the retreat owner and ask for any further evidence we can use to submit to the bank. In case the dispute is lost and the money is refunded to the cardholder/guest, Soulcation cannot be held liable for the amount lost and will invoice the retreat owner in case the deposit was already paid out.</p>
                    <p className="text-15 text-dark-1 mt-5">In case a guest initiates a dispute of the amount paid via the payment processing company, we will submit all the available evidence. We may need more information from the retreat owner and will communicate accordingly for such cases. If the dispute is lost and the money is returned to the cardholder/guest, Soulcation will not be held liable for the amount lost and will invoice the retreat owner if the payout has already been made.</p>
                  </li>
                  <li className="mt-15">
                    For Customers
                    <h3 className="text-16 fw-500 mt-15">Cancellation within 48 hours of Booking</h3>
                    <p className="text-15 text-dark-1 mt-5">If you complete a booking directly on our platform you have the right to cancel your booking within 48 hours and receive a full refund of your amount paid.</p>
                    <p className="text-15 text-dark-1 mt-5">For cancellations made after the 48 hours, please refer to the cancellation policy of your booking.</p>
                  </li>
                </ul>
              </p>
              
              <h2 className="text-16 fw-500 mt-35">
                SECTION 29 - CONTACT INFORMATION
              </h2>
              <p className="text-15 text-dark-1 mt-5">Questions about the Terms of Service should be sent to us at our <a href="malto:namaste@soulcation.co">namaste@soulcation.co</a></p>
            </div>
          </TabPanel>
          {/* End  General Terms of Use */}

          <TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <h1 className="text-30 fw-600 mb-15 text-center"> Privacy policy</h1>
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
          </TabPanel>
        </div>
      </div>
    </Tabs>
  );
};

export default TermsConent;
