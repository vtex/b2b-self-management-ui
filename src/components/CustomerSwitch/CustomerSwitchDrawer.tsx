import { SlideOver, useFadeEffect } from "@faststore/ui";
import { Button, SlideOverHeader } from "@faststore/ui";
import { CustomerSwitchSearch } from "./CustomerSwitchSearch";
import { CustomerSwitchOptionsList } from "./CustomerSwitchOptionsList";
import { useMemo, useState } from "react";
import { CustomerSwitchOptionData } from "./CustomerSwitchOption";
import { CustomerSwitchLoad } from "./CustomerSwitchLoad";

type CustomerSwitchDrawerProps = {
  isOpen: boolean;
  onCloseDrawer?: () => void;
};

// TODO: Remove mock
const options = [
  "Finance Solutions",
  "Stellar Innovations",
  "Blue Horizon Corp",
  "Prime Finance Group",
  "Stellar Ventures",
  "Evergreen Holdings",
  "Finance Pro Consulting",
  "Stellar Strategies",
  "Pioneer Technologies",
  "Global Finance Advisors",
  "TechWave Solutions",
  "Stellar Capital Partners",
  "FinanceEdge Analytics",
  "Quantum Dynamics",
  "Stellar Growth Advisors",
  "BrightFuture Enterprises",
  "FinanceLink Solutions",
  "Stellar Insights",
  "Vanguard Finance Group",
  "FinanceBridge Consulting",
  "Stellar Visionary Labs",
  "NextGen Finance",
  "OceanView Investments",
  "Stellar Nexus",
  "Crestpoint Finance Partners ksldkadlsdkapkldjfdlkfjhdlskjfhdsklajfhdslkfjh",
  "Finance Elevate",
  "Lighthouse Consulting Group",
  "Stellar Synergy",
  "FinanceCore Solutions",
  "Nova Finance Advisors"
].map(
  (name, index) => ({ name, id: `id-${index}` })
);

export const CustomerSwitchDrawer = ({
  isOpen,
  onCloseDrawer,
}: CustomerSwitchDrawerProps) => {
  const { fade, fadeOut } = useFadeEffect();

  const [option, setOption] = useState<CustomerSwitchOptionData>(options[0]);
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredOptions = useMemo(() => {
    if (!searchTerm) {
      return options;
    }
    return options.filter(currentOption =>
      currentOption.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [options, searchTerm]);

  const handleSubmitCustomer = () => {
    console.log(option);
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      onCloseDrawer?.()
    }, 3000);
  };

  return (
    <SlideOver
      data-fs-customer-switch-drawer
      fade={fade}
      onDismiss={fadeOut}
      onTransitionEnd={() => fade === "out" && onCloseDrawer?.()}
      isOpen={isOpen}
      size="partial"
      direction="rightSide"
    >
      <SlideOverHeader
        data-fs-customer-switch-drawer-header
        onClose={() => onCloseDrawer?.()}
      >
        <h1 data-fs-customer-switch-drawer-title>Switch customer ID</h1>
      </SlideOverHeader>

      <section data-fs-customer-switch-drawer-body>
        <CustomerSwitchSearch onSearch={setSearchTerm} />
        <CustomerSwitchOptionsList
          currentCustomer={options[0]}
          options={filteredOptions}
          onChange={setOption}
        />
      </section>

      <footer data-fs-customer-switch-drawer-footer>
        <Button
          data-fs-customer-switch-drawer-button
          onClick={handleSubmitCustomer}
          disabled={option.id === options[0].id || loading}
        >
          {
            loading ?
            <CustomerSwitchLoad /> :
            "Confirm"
          }
        </Button>
      </footer>
    </SlideOver>
  );
};
