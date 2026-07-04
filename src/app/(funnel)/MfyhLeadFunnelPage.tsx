import { MfyhLeadWidgets } from "./MfyhLeadWidgets";
import type { LeadFunnelConfig } from "./leadFunnelConfigs";

type MfyhLeadFunnelPageProps = {
  config: LeadFunnelConfig;
};

export function MfyhLeadFunnelPage({ config }: MfyhLeadFunnelPageProps) {
  return (
    <div className="flex flex-1 flex-col bg-green-tint/40">
      <div className="flex flex-1 items-start justify-center px-4 py-5 sm:px-6 sm:py-10 lg:py-14">
        <div className="mx-auto w-full max-w-2xl">
          <MfyhLeadWidgets config={config} />
        </div>
      </div>
    </div>
  );
}
