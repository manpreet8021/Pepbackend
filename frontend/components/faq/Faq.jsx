const Faq = () => {
  const faqContent = [
    {
      id: 1,
      heading: 'Payment & Cancellations',
      question: [
        {
          id: 1,
          collapseTarget: "One",
          title: "Why should I pay and communicate through Soulcation?",
          content: `<p>We've got three promises that define our commitment to you
                      <ul class='list-disc'>
                        <li>No Booking Fees & Lowest Price Guarantee: We don't charge any booking fees, and we guarantee the lowest prices. If you find a lower price elsewhere, just show us the proof, and we'll happily offer you a better deal!</li>
                        <li>Full Refund Assurance: If the property and services do not live up to the awesome pictures and descriptions on our website. We have got your back.  Please inform us before check-in. We use an escrow model to hold your money, so you can relax knowing it’s safe.</li>
                        <li>24/7 Friendship Hotline: Think of us as your travel buddy! Need help packing? Want tips on the best shopping spots or authentic Kerala food? Need assistance with a train booking in India? Call us anytime, for anything, not necessarily related to your retreat booking. We're here for you like a local friend who knows the place inside out.</li>
                      </ul>
                      We’re here to make your travel experience seamless, fun, and worry-free!
                    </p>`,
        },
        {
          id: 2,
          collapseTarget: "Two",
          title: "Can you explain the process for paying for your retreat in detail?",
          content: `<p>Booking a retreat or training on Soulcation is super easy and flexible! Here's how it works:
                      <ol class='list-number'>
                      <li><b>Payment Options:</b>
                        <ul class='list-disc'><li>You can either pay the full amount upfront or just the deposit, which is often the case for most listings.</li></ul>
                      </li>
                      <li><b>Booking Confirmation:</b>
                        <ul class='list-disc'>
                          <li>Once your booking is processed, you’ll get an automatic email from us with the subject ‘Great choice – your retreat is booked ♥.</li>
                          <li>This email will include a detailed breakdown of what’s been paid and what’s still outstanding, along with your cancellation policy and a receipt.</li>
                        </ul>
                      </li>
                      <li><b>Relax and Enjoy:</b>
                        <ul class='list-disc'>
                          <li>If you’ve paid the full amount at the time of booking, you’re all set! No more payment worries - we’ll handle everything and transfer the necessary balance to the retreat host.</li>
                          <li>Now, all that’s left is for you to start packing and get excited for your retreat!</li>
                        </ul>
                      </li>
                    </ol>
                    <p>Happy travels and enjoy your retreat! 🌟</p>
                  `,
        },
        {
          id: 3,
          collapseTarget: "Three",
          title: "How do I pay the remaining balance for my retreat?",
          content: `<p>After you book through Soulcation, we collect the deposit on behalf of the host, and the remaining balance is usually paid directly to them when you arrive at the retreat.</p>
                    <p>In your booking email from Soulcation, you'll find the due date for your remaining balance. The retreat host will send you the payment instructions directly. If you have any questions about how to pay, just contact them.</p>
                    <p>Keep in mind that while the processing fee for your deposit is covered, there might be extra processing fees for the remaining balance, especially if you pay by card. Most places accept cash, so you can plan for that if you want to avoid extra fees on your final payment.</p>
                    <p>Example:
                      <ul class='list-disc'>
                        <li>Retreat: 14-Day Ayurvedic Healing Retreat, Kerala</li>
                        <li>Total Price: ₹100,000</li>
                        <li>Deposit: ₹20,000 (paid when booking)</li>
                        <li>Remaining Balance: ₹80,000 (due on arrival at the retreat)</li>
                      </ul>
                    </p>
                    <p>So, get ready to relax and rejuvenate! We’re here to make sure everything goes smoothly.</p>
                  `,
        },
        {
          id: 4,
          collapseTarget: "Four",
          title: "What is your cancellation Policy?",
          content: `<p>We know that sometimes things come up, and unexpected events happen that can keep you from going on a trip you’ve planned.</p>
                    <p>If you’re totally sure you aren’t able to make it to the retreat, the best thing you can do is cancel.</p>
                    <p>To streamline and simplify, we offer three standardised and one custom policy : Free, Flexible, Moderate & custom</p>
                    <p>Free
                      <ul class='list-disc'>
                        <li>100% deposit refund for cancellations made 30 or more days before the retreat start date.</li>
                        <li>50% deposit refund for cancellations made 1-29 days before the retreat start date.</li>
                      </ul>
                    </p>
                    <p>Flexible
                      <ul class='list-disc'>
                        <li>100% deposit refund for cancellations made 30 or more days before the retreat start date.</li>
                        <li>50% deposit refund for cancellation 15-29 days before retreat start date.</li>
                        <li>0% deposit refund for cancellation 0-14 days before retreat start date.</li>
                      </ul>
                    </p>
                    <p>Moderate
                      <ul class='list-disc'>
                        <li>100% deposit refund for cancellation 60+ days before retreat start date.</li>
                        <li>50% deposit refund for cancellation 30-59 days before retreat start date.</li>
                        <li>0% deposit refund for cancellation 0-29 days before retreat start date.</li>
                      </ul>
                    </p>
                    <p>Custom</p>
                    <p>Before you book a retreat, make sure to read and understand the cancellation policy for each one. It's important to know which policy applies to the retreat you're interested in.</p>
                    <p>Don't worry, we'll include all these details in your booking summary email, so you'll always have it handy for reference.</p>
                  `,
        },
        {
          id: 5,
          collapseTarget: "Five",
          title: "How do I pay the remaining balance for my retreat?",
          content: `<p>After you book through Soulcation, we collect the deposit on behalf of the host, and the remaining balance is usually paid directly to them when you arrive at the retreat.</p>
                    <p>In your booking email from Soulcation, you'll find the due date for your remaining balance. The retreat host will send you the payment instructions directly. If you have any questions about how to pay, just contact them.</p>
                    <p>Keep in mind that while the processing fee for your deposit is covered, there might be extra processing fees for the remaining balance, especially if you pay by card. Most places accept cash, so you can plan for that if you want to avoid extra fees on your final payment.</p>
                    <p>Example:
                      <ul class='list-disc'>
                        <li>Retreat: 14-Day Ayurvedic Healing Retreat, Kerala</li>
                        <li>Total Price: ₹100,000</li>
                        <li>Deposit: ₹20,000 (paid when booking)</li>
                        <li>Remaining Balance: ₹80,000 (due on arrival at the retreat)</li>
                      </ul>
                    </p>
                    <p>So, get ready to relax and rejuvenate! We’re here to make sure everything goes smoothly.</p>
                  `,
        },
      ]
    }
  ];
  return (
    <>
      {faqContent.map((item) => (
        <div className="col-12" key={item.id}>
          <h2 className="text-20 fw-600">{item.heading}</h2>
          {
            item.question.map((question) => (
              <div className="accordion__item px-20 py-20 border-light rounded-4" key={question.id}>
                <div
                  className="accordion__button d-flex items-center"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${question.collapseTarget}`}
                >
                  <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                    <i className="icon-plus" />
                    <i className="icon-minus" />
                  </div>
                  <div className="button text-dark-1 text-start">{question.title}</div>
                </div>
                {/* End accordion button */}

                <div
                  className="accordion-collapse collapse"
                  id={question.collapseTarget}
                  data-bs-parent="#Faq1"
                >
                  <div className="pt-15 pl-60">
                    <p style={{whiteSpace: 'pre-line'}} dangerouslySetInnerHTML={{ __html: question.content }} />
                  </div>
                </div>
                {/* End accordion conent */}
              </div>
            ))
          }
        </div>
      ))}
    </>
  );
};

export default Faq;
