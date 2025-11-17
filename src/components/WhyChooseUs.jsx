import Image from 'next/image';
import './styles/WhyChooseUs.css';

const features = [
  {
    img: '/images/why-choose-us-1.png',
    title: 'Exclusive Media Access',
    desc: "Unmatched connections across Sri Lanka's media landscape",
  },
  {
    img: '/images/why-choose-us-2.png',
    title: 'Strong Corporate Backbone',
    desc: 'Backed by Wickramanayake Holdings’ proven track record',
  },
  {
    img: '/images/why-choose-us-3.png',
    title: 'Results-Driven',
    desc: 'Measurable outcomes that drive real business growth',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-section" data-aos="fade-up">
      <div className="why-choose-headline">
        <div className="headline-bg">Why Choose Us</div>
        <div className="headline-fg">Why Choose Us</div>
      </div>
      <div className="why-choose-sub">We fuse creativity and technology to grow your brand.</div>
      <div className="why-choose-features">
        {features.map((f, i) => (
          <div className="why-choose-card" key={i} data-aos="fade-in" data-aos-delay={i * 100}>
            <div className="why-choose-icon">
              <Image src={f.img} alt={f.title} width={48} height={48} />
            </div>
            <div className="why-choose-title">{f.title}</div>
            <div className="why-choose-desc">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
