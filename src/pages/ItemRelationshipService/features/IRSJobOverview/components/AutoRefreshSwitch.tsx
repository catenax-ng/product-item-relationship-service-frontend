import React from "react";

import { IOSSwitch } from "../../../../../components/IOSSwitch";
import { useTranslation } from "../../../../../lib";

export const AutoRefreshSwitch: React.FC<{ onChange: (value: boolean) => void }> = ({ onChange }) => {
  const { t } = useTranslation();

  return (
    <>
      <IOSSwitch
        sx={{ m: 1 }}
        onChange={(event) => {
          onChange(event.target.checked);
        }}
        data-testid="IOSSwitch"
      />
      {t("content.irs.jobsTable.toggleAutoRefresh")}
    </>
  );
};
