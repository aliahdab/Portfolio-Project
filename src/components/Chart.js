import React, { Component } from 'react';
import ReactApexCharts from 'react-apexcharts';

class Chart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: {
        plotOptions: {
          bar: {
            horizontal: true,
            distributed: true,
          }
        },
        grid: {
          column: {
            colors: ['white', '#ffffe6', '#ffe6ff']
          }
        },
        fill: {
          colors: ['#8D4752', '#2C3758', '#43546A']
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['GIT', 'Java', 'Javascript', 'CISCO CCNA', 'Exchange Server', 'SQL', 'Oracle', 'Virtual Systems'],
          labels: {
            show: true,
            rotate: -45,
            rotateAlways: false,
            hideOverlappingLabels: true,
            showDuplicates: false,
            trim: true,
            minHeight: undefined,
            maxHeight: 120,
            style: {
              colors: '#ffffff',
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              cssClass: 'apexcharts-xaxis-label',
            },
          }
        },
        yaxis: {
          labels: {
            show: true,
            align: 'right',
            minWidth: 0,
            maxWidth: 160,
            style: {
              color: '#ffffff',
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              cssClass: 'apexcharts-yaxis-label',
            },
          },
        },
      },
      series: [{
        data: [70, 80, 85, 95, 95, 75, 60, 70]
      }],
    }
  }

  render() {
    return (
      <div className="skills_chart">
        <ReactApexCharts options={this.state.options} series={this.state.series} type="bar" height="241" />
      </div>

    )
  }
}

export default Chart;
