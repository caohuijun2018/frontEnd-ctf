import React, { useRef, useEffect } from 'react';
import { Line } from '@antv/g2plot';
import './index.less';
import { data } from './mock';

const UserLine = () => {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) {
      return;
    }
    const line = new Line(container.current, {
      data,
      xField: 'day',
      yField: 'value',
      seriesField: 'category',
      yAxis: {
        label: {
          // 数值格式化为千分位
          formatter: (v: any) =>
            `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, s => `${s},`),
        },
      },
      color: ['#1979C9', '#D62A0D', '#FAA219'],
    });
    line.render();
  }, []);

  return (
    <div>
      <div className="dataMess">做题进度</div>
      <div ref={container} className="dataPic" />
    </div>
  );
};
export default UserLine;
