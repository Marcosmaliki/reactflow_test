import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
//@ts-ignore
function CustomNode({ data }) {

    function splitLastOccurrence(str:string, substring:string) {
        const lastIndex = str.lastIndexOf(substring);
      
        const before = str.slice(0, lastIndex);
      
        const after = str.slice(lastIndex + 1);
      
        return [before, after];
      }

  return (
    <div className="px-4 py-2 shadow-md rounded-full bg-white border-2 border-stone-400">
      <div className="flex">
        <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100">
          😎
        </div>
        <div className="ml-2">
          <div className="text-sm font-bold text-gray-500">{data.label.trim().split(' ')[0]}</div>
          <div className="text-gray-500  text-sm">{splitLastOccurrence(data.label, '/')[1]}</div>
        </div>
      </div>

      <Handle type="target" position={Position.Top} className="w-16 !bg-teal-500" />
      <Handle type="source" position={Position.Bottom} className="w-16 !bg-teal-500" />
    </div>
  );
}

export default memo(CustomNode);
