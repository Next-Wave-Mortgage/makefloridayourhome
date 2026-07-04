import { MfyhLeadWidgets } from "./MfyhLeadWidgets";
import type { LeadFunnelConfig } from "./leadFunnelConfigs";

type MfyhLeadFunnelPageProps = {
  config: LeadFunnelConfig;
};

export function MfyhLeadFunnelPage({ config }: MfyhLeadFunnelPageProps) {
  return (
    <section className="flex flex-1 flex-col bg-white pt-10 pb-8 sm:pt-12">
      <div className="mx-auto w-full max-w-[760px] px-5 sm:px-8">
        <div className="mx-auto w-full max-w-[720px]">
          <MfyhLeadWidgets config={config} />
        </div>
      </div>
    </section>
  );
}
