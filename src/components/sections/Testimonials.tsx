const reviews = [
  {
    name: "Alexandra Miller",
    image: "/images/reviewers/alexandra-miller.webp",
    text: "Very professional and informative. **Goes the extra mile** to help unlike a lot of brokers who just want the sale. I am excited to work with Phil!",
    rating: 5,
  },
  {
    name: "Amanda Peters",
    image: "/images/reviewers/amanda-peters.webp",
    text: "Ryan and Phil **made my mortgage process simple**. They walked me through each step, and had **great communication** throughout. I would absolutely recommend them!",
    rating: 5,
  },
  {
    name: "Seth Jacobs",
    image: "/images/reviewers/seth-jacobs.webp",
    text: "Phil **made a deal happen** that nobody else could do, because of my self-employment. He was always available for a phone call or text. He is the **hardest working guy** in the mortgage industry. HIGHLY RECOMMEND!",
    rating: 5,
  },
  {
    name: "Joseph",
    image: "/images/reviewers/joseph.webp",
    text: "Ryan was **unbelievable from start to finish**, answering any questions or emails along the way at all hours of the day or night. I would highly recommend him to anyone looking for a mortgage.",
    rating: 5,
  },
  {
    name: "Annie Cardley",
    image: "/images/reviewers/annie-cardley.webp",
    text: "We had a great experience working with Phil. He was very helpful, **always responsive and available**, and got us a great rate! He was so quick ensuring a **fast and smooth closing**.",
    rating: 5,
  },
  {
    name: "Shelby Kaubris",
    image: "/images/reviewers/shelby-kaubris.webp",
    text: "Ryan was always available to answer questions we had, was **knowledgeable and attentive** to details, and made the process from pre-approval to closing **very smooth**!",
    rating: 5,
  },
  {
    name: "Michael Rojewski",
    image: "/images/reviewers/michael-rojewski.webp",
    text: "Phil is the **best mortgage guy** you could ever work with. He has a wealth of knowledge and is always **3 steps ahead**! He truly loves what he does and it shows.",
    rating: 5,
  },
  {
    name: "Chris Schmitt",
    image: "/images/reviewers/chris-schmitt.webp",
    text: "Ryan was **nothing short of perfect** for us through the entire process. He's extremely personable and knowledgeable. He's our **go-to guy** from here on out.",
    rating: 5,
  },
  {
    name: "Anthony Abbruscato",
    image: "/images/reviewers/anthony-abbruscato.webp",
    text: "Phil and his team are **an absolute pleasure** to work with. We were first-time home buyers, and it was so helpful to work with a team so knowledgeable. The process was **seamless and stress free**!",
    rating: 5,
  },
  {
    name: "Hannah",
    image: "/images/reviewers/hannah.webp",
    text: "Ryan was very helpful and **made the process** of finding the right mortgage **easy**! Highly recommend working with him!",
    rating: 5,
  },
  {
    name: "Felicity Young",
    image: "/images/reviewers/felicity-young.webp",
    text: "Phil and his team were **incredibly helpful** from start to finish. Phil is always available to answer questions and works efficiently. He has helped us with **two mortgages** — I recommend him to everyone!",
    rating: 5,
  },
  {
    name: "Jordan Yorks",
    image: "/images/reviewers/jordan-yorks.webp",
    text: "Ryan **went above and beyond** helping us not only get the mortgage we needed but assisting with the entire process of buying our first home. Made an otherwise stressful process **seamless**!",
    rating: 5,
  },
  {
    name: "Nick Dassatti",
    image: "/images/reviewers/nick-dassatti.webp",
    text: "We couldn't have been happier working with Phil. He stayed on top of **mortgage rates** and made sure we got the **best rate possible**. Much less stressful than we anticipated!",
    rating: 5,
  },
  {
    name: "Devlin Passway",
    image: "/images/reviewers/devlin-passway.webp",
    text: "Working with Phil was **fantastic**. He is very detailed and knowledgeable, always willing to answer any questions **no matter the time or day**.",
    rating: 5,
  },
];

const platforms = [
  {
    name: "Ryan Skerritt",
    label: "112+ Google Reviews",
    rating: "4.9",
    href: "https://maps.app.goo.gl/tNj82Z8RJmnJMrVTA",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
    ),
  },
  {
    name: "Phil Ganz",
    label: "100+ Google Reviews",
    rating: "4.9",
    href: "https://maps.app.goo.gl/bKrmHe1834AbDoLi8",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
    ),
  },
  {
    name: "Zillow",
    label: "27+ Zillow Reviews",
    rating: "4.8",
    href: "https://www.zillow.com/lender-profile/makefloridayourhome/",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28">
        <path d="M12.005 2L2 9.5h3v10.522h14V9.5h3L12.005 2z" fill="#006AFF" />
        <path d="M9.5 13h5v4h-5z" fill="#fff" />
      </svg>
    ),
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#FFB800"
          stroke="#FFB800"
          strokeWidth="1"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

/** Render review text with **bold** markdown syntax. */
function ReviewText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <p className="text-[14px] leading-relaxed text-dark-green/70">
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="text-dark-green">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </p>
  );
}

export function Testimonials() {
  return (
    <section className="bg-white py-5 sm:py-8">
      {/* Auto-scrolling review carousel */}
      <div className="overflow-hidden">
        <div
          className="marquee-track flex w-max gap-5"
          style={{ animation: "marquee 50s linear infinite" }}
        >
          {[...reviews, ...reviews].map((review, idx) => (
            <div
              key={`${review.name}-${idx}`}
              className="w-[280px] shrink-0 rounded-xl border border-border-gray/60 bg-white p-5 shadow-sm sm:w-[320px]"
            >
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={review.image}
                  alt={`${review.name} review`}
                  className="h-9 w-9 shrink-0 rounded-full object-cover"
                />
                <div>
                  <p className="text-[14px] font-bold text-dark-green">
                    {review.name}
                  </p>
                  <Stars count={review.rating} />
                </div>
              </div>
              <div className="mt-3">
                <ReviewText text={review.text} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-2 text-center text-[10px] text-dark-green/25">
        Photos are anonymized for privacy
      </p>

      {/* Platform badges */}
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border-gray/60 px-5 py-3 transition-all hover:border-brand-green/30 hover:shadow-sm"
            >
              <span className="shrink-0">{platform.icon}</span>
              <div className="min-w-0">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#FFB800"
                      stroke="#FFB800"
                      strokeWidth="1"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="mt-0.5 text-[13px] text-dark-green/60">
                  {platform.label}
                </p>
              </div>
              <span className="ml-auto text-[28px] font-bold text-dark-green">
                {platform.rating}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
