'use client';
import Image from 'next/image';
import './styles/Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      quote:
        'DigiWave transformed our brand presence. Their strategic approach and media connections delivered results beyond our expectations.',
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'CEO',
      quote:
        "Working with DigiWave was a game-changer. Their team's creativity and professionalism helped us reach audiences we never thought possible.",
    },
    {
      id: 3,
      name: 'Emily Chen',
      role: 'Brand Manager',
      quote:
        "The ROI we achieved through DigiWave's campaigns exceeded all projections. They truly understand the digital landscape.",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <div className="testimonials-headline">
          <div className="headline-bg">What Our Clients Say</div>
          <div className="headline-fg">What Our Clients Say</div>
        </div>
        <h2 className="testimonials-title">
          Real feedback from <span className="text-blue">real partnerships</span>
        </h2>
      </div>
      <div className="testimonials-container">
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className=" flex gap-3">
                <div className="testimonial-icon">
                  <Image
                    src="/images/favicon.png"
                    alt="Testimonial Icon"
                    width={50}
                    height={50}
                    className="testimonial-icon"
                  />
                </div>
                <div className="testimonial-author">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
              <p className="testimonial-quote">&quot;{testimonial.quote}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
