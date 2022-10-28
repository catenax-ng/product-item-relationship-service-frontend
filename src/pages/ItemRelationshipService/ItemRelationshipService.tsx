import React from "react";
import { IRSJobOverview } from "./features/IRSJobOverview/IRSJobOverview";
import { IRSJobAddForm } from "./form/IRSJobAddForm";

import "./irs.scss";

export const ItemRelationshipService: React.FC = () => {
  return (
    <main className="main">
      <IRSJobAddForm />
      <IRSJobOverview />
    </main>
  );
};
