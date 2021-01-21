import React from 'react';
import {
    XYPlot,
    XAxis, // Shows the values on x axis
    YAxis, // Shows the values on y axis
    VerticalBarSeries,
    LabelSeries
} from 'react-vis';


class Trafficchart extends React.Component {
    render() {
        //const data = this.props.data;
        const data =[
            { "y": 100, "x": "Motor Bikes" },
            { "y": 112, "x": "Cars" },
            { "y": 230, "x": "Three Wheel" },
            { "y": 268, "x": "Trucks" },
            { "y": 150, "x": "Vans" },
            
        ]
        const chartWidth = 400;
        const chartHeight = 300;
        const chartDomain = [0, chartHeight];
        return (
            <XYPlot 
                xType="ordinal" 
                width={chartWidth} 
                height={chartHeight} 
                yDomain={chartDomain}
            >
                <XAxis />
                <YAxis />
                <VerticalBarSeries
                    data={data}
                />
                <LabelSeries
                    data={data.map(obj => {
                        return { ...obj, label: obj.y.toString() }
                    })}
                    labelAnchorX="middle"
                    labelAnchorY="text-after-edge"
                />
            </XYPlot>
        );
    }
}
export default Trafficchart;