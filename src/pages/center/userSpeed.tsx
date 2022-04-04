import React, { useRef, useEffect } from 'react';
import { Bar, Pie } from '@antv/g2plot';
import './index.less';

const UserSpeed = () => {
  const data = [
    { type: '未通过', value: 85 },
    { type: '已通过', value: 15 },
  ];
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) {
      return;
    }

    const piePlot = new Pie(container.current, {
      appendPadding: 10,
      data,
      angleField: 'value',
      colorField: 'type',
      radius: 0.8,
      label: {
        type: 'outer',
        content: '{name} {percentage}',
      },
      interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
    });
    piePlot.update({
      theme: {
        styleSheet: {
          brandColor: '#B8E1FF',
          paletteQualitative10: [
            '#B8E1FF',
            '#9AC5FF',
            // '#7DAAFF',
            // '#5B8FF9',
            // '#3D76DD',
            // '#085EC0',
            // '#0047A5',
            // '#00318A',
            // '#001D70',
          ],
          paletteQualitative20: [
            '#B8E1FF',
            '#9AC5FF',
            // '#7DAAFF',
            // '#5B8FF9',
            // '#3D76DD',
            // '#085EC0',
            // '#0047A5',
            // '#00318A',
            // '#001D70',
          ],
        },
      },
    });
    piePlot.render();
  }, []);

  return (
    <div className="speed">
      <div ref={container} />
    </div>
  );
};
export default UserSpeed;
