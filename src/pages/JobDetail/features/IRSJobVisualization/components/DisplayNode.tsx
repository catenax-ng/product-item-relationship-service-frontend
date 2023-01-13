import styled from "@emotion/styled";
import { Box, useTheme } from "@mui/material";
import { uniqueId } from "lodash";
import { useState } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { JobResponse, Shell, SubmodelDescriptor } from "../../../../../types/jobs";
import { NodeDetailDialog } from "./NodeDetailDialog";
import { SubmodelDetailCard } from "./submodelDetailCard";

const getSortedSubModelDescriptions = (shell: Shell) => {
  function compare(a: SubmodelDescriptor, b: SubmodelDescriptor) {
    if (a.idShort < b.idShort) {
      return -1;
    }
    if (a.idShort > b.idShort) {
      return 1;
    }
    return 0;
  }
  return [...shell.submodelDescriptors].sort(compare);
};

export const DisplayNode: React.FC<{
  data: NodeProps<Shell>;
  job: JobResponse;
}> = ({ data, job }) => {
  const { spacing } = useTheme();
  const shell = data.data;
  const [showNodeDialog, setShowNodeDialog] = useState<{ shell: Shell; aspectId?: string } | undefined>();
  return (
    <div className="nodrag">
      <NodeDetailDialog showInfo={showNodeDialog} onClose={() => setShowNodeDialog(undefined)} job={job} />
      <Handle type="target" position={Position.Top} draggable={false} />
      <NodeStyles>
        <ClickableDiv onClick={() => setShowNodeDialog({ shell })}>
          <p>{shell.idShort}</p>
          <p>{data.id}</p>
        </ClickableDiv>
        <Box
          sx={{
            display: "grid",
            gap: spacing(1, 3),
            gridTemplateColumns: `repeat(1, 1fr)`,
            marginLeft: 0.5,
          }}
        >
          <div style={{ textAlign: "left", margin: 5 }}>Aspects:</div>
          {getSortedSubModelDescriptions(shell).map((n: SubmodelDescriptor) => {
            //Todo: Check for errors and add them to the object
            return (
              <SubmodelDetailCard
                key={uniqueId(n.identification)}
                submodel={n}
                onClick={() => setShowNodeDialog({ shell, aspectId: n.idShort })}
                job={job}
              />
            );
          })}
        </Box>
      </NodeStyles>
      <Handle type="source" position={Position.Bottom} id="a" draggable={false} />
    </div>
  );
};

const NodeStyles = styled.div`
  fill: white;
  border: 1px solid black;
  background-color: white;
  padding: 0.5rem;
  width: 300px;
`;

const ClickableDiv = styled.div`
  cursor: pointer;
  font-size: x-small;
  text-align: left;
  width: 100%;
  padding: 10px;
`;