"use client";

import { Canvas, NodeProps, EdgeProps, Node } from "reaflow";
import { useCallback, useState } from "react";
import ReactFlow, {
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
  MiniMap,
  Controls,
  Background,
  NodeChange,
  useNodesState,
  useEdgesState,
  ConnectionLineType,
} from "reactflow";
import "reactflow/dist/style.css";

import dagre from "dagre";
import getNodesEdges from "./utils/reactflow";
import CustomNode from "@/components/CustomNode";

export default function Home() {


  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  const nodeWidth = 172;
  const nodeHeight = 36;

  const getLayoutedElements = (
    nodes: any[],
    edges: any[],
    direction = "TB"
  ) => {
    const isHorizontal = direction === "LR";
    dagreGraph.setGraph({ rankdir: direction });

    nodes.forEach((node: { id: string }) => {
      dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });

    edges.forEach((edge: any) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    nodes.forEach((node: any) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      node.targetPosition = isHorizontal ? "left" : "top";
      node.sourcePosition = isHorizontal ? "right" : "bottom";

      // We are shifting the dagre node position (anchor=center center) to the top left
      // so it matches the React Flow node anchor point (top left).
      node.position = {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      };

      return node;
    });

    return { nodes, edges };
  };


  const initialNodes =  getNodesEdges().nodes
  const initialEdges =  getNodesEdges().edges



  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
    initialNodes,
    initialEdges
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  const onConnect = useCallback(
    (params: any) =>
      setEdges((eds) =>
        addEdge(
          { ...params, type: ConnectionLineType.SmoothStep, animated: true },
          eds
        )
      ),
    []
  );
  const onLayout = useCallback(
    (direction: any) => {
      const { nodes: layoutedNodes, edges: layoutedEdges } =
        getLayoutedElements(nodes, edges, direction);

      setNodes([...layoutedNodes]);
      setEdges([...layoutedEdges]);
    },
    [nodes, edges]
  );

  const onNodeChange = useCallback(
    (x: any) => setNodes((newNode) => applyNodeChanges(x, newNode)),
    [setNodes]
  );

  const onEdgeChange = useCallback(
    //@ts-ignore
    (x: any) => setEdges((eds) => applyEdgeChanges(x, eds)),
    [setEdges]
  );

  const onEdgeConnect = useCallback(
    //@ts-ignore
    (x) => setEdges((eds) => addEdge({ ...x, animated: true }, eds)),
    [setEdges]
  );

  const nodeTypes = {
    custom: CustomNode
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" w-full h-screen">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodeChange}
          onEdgesChange={onEdgeChange}
          onConnect={onEdgeConnect}
          // nodeTypes= {nodeTypes}
          fitView
        >
          {/* <MiniMap /> */}
          <Controls />
          <Background />
        </ReactFlow>
      </div>

     

    </main>
  );
}
