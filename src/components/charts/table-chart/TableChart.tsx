/* eslint-disable react/no-array-index-key */
import { useMemo } from 'react';

import CardWrapper, { CardWrapperProps } from 'lib/components/card-wrapper/CardWrapper';

import styles from './TableChart.scss';

type RowData = {
  name: string,
  avatar?: string,
  data: number[],
};

type CellColorData = {
  text: string,
  background: string,
};

export type TableChartProps = {
  columns: string[],
  series: RowData[],
  colors?: CellColorData[] | Record<number, CellColorData>,
  getColors?: (value: number) => CellColorData,
};

export function TableChart({ columns, series, colors, getColors }: TableChartProps) {
  const colorsMap = useMemo(() => {
    if (colors) {
      return colors;
    }
    if (getColors) {
      const uniqueValues = Array.from(new Set(series.flatMap((s) => s.data))).sort();
      return uniqueValues.reduce<Record<number, CellColorData>>((acc, value) => {
        acc[value] = getColors(value);
        return acc;
      }, {});
    }
    return {};
  }, [series, colors, getColors]);

  return (
    <div
      className={styles.grid}
      style={{ '--columns-count': columns.length, '--rows-count': series.length } as React.CSSProperties}
      data-testid="table-chart"
    >
      <div className={styles.row}>
        {columns.map((text, index) => (
          <div key={index} className={styles.header}>{text}</div>
        ))}
      </div>
      {series.map(({ name, data, avatar }, index) => (
        <div key={index} className={styles.row}>
          <div className={styles.name}>
            {avatar && <img src={avatar} alt={name} className={styles.avatar} />}
            {name}
          </div>
          {data.map((value, i) => (
            <div
              key={i}
              className={styles.value}
              style={{ color: colorsMap[value]?.text, backgroundColor: colorsMap[value]?.background }}
            >
              {value}
            </div>
          ))}
        </div>
      ))}
      <div className={styles.legend}>
        {Object.entries(colorsMap).map(([value, { text, background }], index) => (
          <div
            key={index}
            className={styles.color}
            style={{ color: text, backgroundColor: background }}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}

// solution for Ember usage
function TableChartCard({ icon, title, subTitle, width, height, ...rest }: CardWrapperProps & TableChartProps) {
  return (
    <CardWrapper {...{ icon, title, subTitle, width, height, className: styles.card }}>
      <TableChart {...rest} />
    </CardWrapper>
  );
}

export default TableChartCard;
