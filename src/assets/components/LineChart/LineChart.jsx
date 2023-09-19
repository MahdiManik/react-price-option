import { LineChart as LineCrt, Line } from 'recharts';

const LineChart = () => {

    const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page b', uv: 500, pv: 2500, amt: 2500 },
    { name: 'Page c', uv: 600, pv: 2600, amt: 2600 }
    ];


    return (
        <div className='text-white'>

            <LineCrt width={400} height={400} data={data}>
                <Line dataKey="amt"></Line>
            </LineCrt>
        </div>
    );
};



export default LineChart;