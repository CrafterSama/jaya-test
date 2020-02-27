import React from 'react';
import { Chart } from 'react-charts';

// eslint-disable-next-line
const LineChart = ({ datas }) => {
    const data = React.useMemo(
        () => [
            {
                label: 'Generated Chart',
                data: datas,
            },
        ],
        [datas]
    );

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' },
        ],
        []
    );

    return (
        <div
            style={{
                width: '400px',
                height: '300px',
            }}
        >
            <Chart data={data} axes={axes} />
        </div>
    );
};

export default LineChart;
