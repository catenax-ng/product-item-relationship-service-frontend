import { Box } from "@mui/material";
import { uniqueId } from "lodash";

import { IconButton } from "cx-portal-shared-components";
import { EdgeData, NodeData } from "reaflow";
import { FullScreen, useFullScreenHandle } from "../../../../components/FullScreenHandler";
import { FullscreenExitIcon, FullscreenIcon, useTranslation } from "../../../../lib";
import { Canvas, CanvasPosition, Edge, Node } from "../../../../lib/reaflow";
import { JobResponse, Shell } from "../../../../types/jobs";
import { NodeTemplate } from "./components/nodeTemplate";

const getNodes = (job: JobResponse): NodeData<Shell>[] => {
  return job.shells.map((el: Shell): NodeData<Shell> => {
    return {
      id: el.globalAssetId.value[0],
      // text: el.globalAssetId.value[0],
      height: 300,
      width: 300,
      ...el, //TODO: Evaluate if this should move to the data attribute
    };
  });
};

const getEdges = (job: JobResponse): EdgeData<undefined>[] => {
  const validNodeIds = job.shells.map((x: Shell) => {
    return x.globalAssetId.value[0];
  });
  const ret: EdgeData<undefined>[] = [];
  job.relationships.forEach((rel) => {
    const from = rel.catenaXId;
    const to = rel.linkedItem.childCatenaXId;

    if (validNodeIds.includes(from) && validNodeIds.includes(to)) {
      ret.push({
        id: uniqueId(rel.catenaXId),
        from: rel.catenaXId,
        to: rel.linkedItem.childCatenaXId,
      });
    }
  });

  return ret;
};

export const IrsJobVisualization: React.FC<{ job: JobResponse }> = ({ job }) => {
  const { t } = useTranslation();
  const handle = useFullScreenHandle();
  const nodes = getNodes(job);
  const edges = getEdges(job);

  const canvasHeight = () => {
    if (handle.active) {
      return window.innerHeight;
    } else {
      return 800;
    }
  };

  return (
    <section>
      <Box className="irs-visualization" sx={{ textAlign: "center" }}>
        <FullScreen handle={handle}>
          <Box className="irs-visualization-header">
            <h5>{t("content.irs.visualization.title")}</h5>

            {handle.active && (
              <IconButton color="secondary" size="medium" style={{ alignSelf: "right" }} onClick={handle.exit}>
                <FullscreenExitIcon />
              </IconButton>
            )}

            {!handle.active && (
              <IconButton color="secondary" size="medium" style={{ alignSelf: "right" }} onClick={handle.enter}>
                <FullscreenIcon />
              </IconButton>
            )}
          </Box>
          <Canvas
            className="canvas"
            zoom={0.4}
            height={canvasHeight()}
            nodes={nodes}
            edges={edges}
            defaultPosition={CanvasPosition.TOP}
            // fit={true}
            node={
              <Node
                onClick={(event, node) => {
                  event.preventDefault();
                  // console.log('CLICK', node)
                  //   dispatch(jobSlice.actions.openNodeDialog(node.id));
                }}
              >
                {(nodeChild) => (
                  <foreignObject height={290} width={290} x={0} y={0}>
                    <Box>
                      <NodeTemplate shell={nodeChild.node} />
                    </Box>
                  </foreignObject>
                )}
              </Node>
            }
            edge={
              <Edge
                onClick={(event, edge) => {
                  // console.log('Selecting Edge', event, edge)
                  // dispatch(jobSlice.actions.openEdgeDialog(edge));
                }}
              />
            }
          />
        </FullScreen>
      </Box>
      {/* <NodeDetailDialog show={showNodeDialog} onClose={() => closeNodeDialog()} />
      <EdgeDetailDialog show={showEdgeDialog} onClose={() => closeEdgeDialog()} /> */}
    </section>
  );
};
