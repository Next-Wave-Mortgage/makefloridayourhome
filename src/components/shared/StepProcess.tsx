interface Step {
  title: string;
  description: string;
}

interface StepProcessProps {
  heading: React.ReactNode;
  steps: Step[];
  bg?: "green-tint" | "white";
}

export function StepProcess({ heading, steps, bg = "white" }: StepProcessProps) {
  return (
    <section
      className={`py-16 sm:py-20 lg:py-24 ${bg === "green-tint" ? "bg-green-tint" : "bg-white"}`}
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <h2 className="mx-auto max-w-2xl text-center text-[28px] font-bold leading-tight text-dark-green sm:text-[36px] lg:text-[42px]">
          {heading}
        </h2>

        <div className="relative mx-auto mt-14 max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-0 hidden h-full w-[2px] bg-border-gray sm:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={step.title} className="relative flex gap-6">
                {/* Number circle */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-green text-[16px] font-black text-white shadow-[0_4px_12px_rgba(0,105,72,0.25)]">
                  {i + 1}
                </div>

                {/* Content */}
                <div className="flex-1 rounded-xl border border-border-gray/60 bg-white px-6 py-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-brand-green/30 hover:shadow-[0_4px_16px_rgba(0,105,72,0.08)]">
                  <h3 className="text-[17px] font-bold text-dark-green sm:text-[18px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-dark-green/60 sm:text-[15px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
