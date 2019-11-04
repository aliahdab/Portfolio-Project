import React, { Component } from 'react';
import ReactApexCharts from 'react-apexcharts'

class Chart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['GIT', 'Java', 'Javascript', 'CISCO CCNA', 'Exchange Server', 'SQL', 'Oracle', 'Virtual Systems'],
        }
      },
      series: [{
        data: [70, 80, 85, 95, 95, 75, 60, 70]
      }],
    }
  }

  render() {
    return (
      <div className="skills_chart">
        <ReactApexCharts options={this.state.options} series={this.state.series} type="bar" height="242" />
      </div>

    )
  }
}

export default Chart;