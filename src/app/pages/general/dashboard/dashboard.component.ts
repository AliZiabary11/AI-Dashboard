import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import Highcharts from '@hp/shared/local-exports/highchart';
import HighMaps from '@hp/shared/local-exports/highmaps';



@Component({
  selector: 'hp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, AfterViewInit {


  chart1HighChart: any = Highcharts;
  chart2HighChart: any = Highcharts;
  chart3HighChart: any = Highcharts;
  chart4HighChart: any = Highcharts;
  chart5HighChart: any = HighMaps;
  chart6HighChart: any = Highcharts;


  chart1: any = {
    event: null,
    eventType: null,
    eventSeriesDataType: null,
    options: {

      title: {
        text: 'U.S Solar Employment Growth',
        align: 'left'
      },

      subtitle: {
        text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
        align: 'left'
      },

      yAxis: {
        title: {
          text: 'Number of Employees'
        }
      },

      xAxis: {
        accessibility: {
          rangeDescription: 'Range: 2010 to 2020'
        }
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 2010
        }
      },

      series: [{
        name: 'Installation & Developers',
        data: [43934, 48656, 65165, 81827, 112143, 142383,
          171533, 165174, 155157, 161454, 154610]
      }, {
        name: 'Manufacturing',
        data: [24916, 37941, 29742, 29851, 32490, 30282,
          38121, 36885, 33726, 34243, 31050]
      }, {
        name: 'Sales & Distribution',
        data: [11744, 30000, 16005, 19771, 20185, 24377,
          32147, 30912, 29243, 29213, 25663]
      }, {
        name: 'Operations & Maintenance',
        data: [null, null, null, null, null, null, null,
          null, 11164, 11218, 10077]
      }, {
        name: 'Other',
        data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
          17300, 13053, 11906, 10073]
      }],

      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }

    },
    highchart: this.chart1HighChart,
  };


  chart2: any = {
    event: null,
    eventType: null,
    eventSeriesDataType: null,
    options: {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Monthly Average Rainfall'
      },
      subtitle: {
          text: 'Source: WorldClimate.com'
      },
      xAxis: {
          categories: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec'
          ],
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Rainfall (mm)'
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      series: [{
          name: 'Tokyo',
          data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4,
              194.1, 95.6, 54.4]
  
      }, {
          name: 'New York',
          data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5,
              106.6, 92.3]
  
      }, {
          name: 'London',
          data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3,
              51.2]
  
      }, {
          name: 'Berlin',
          data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8,
              51.1]
  
      }]
  },
    highchart: this.chart2HighChart,
  };

  chart3: any = {
    event: null,
    eventType: null,
    eventSeriesDataType: null,
    options: {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Browser market shares in April, 2022',
        align: 'left'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            connectorColor: 'silver'
          }
        }
      },
      series: [{
        name: 'Share',
        data: [
          { name: 'Chrome', y: 73.24 },
          { name: 'Edge', y: 12.93 },
          { name: 'Firefox', y: 4.73 },
          { name: 'Safari', y: 2.50 },
          { name: 'Internet Explorer', y: 1.65 },
          { name: 'Other', y: 4.93 }
        ]
      }]
    },
    highchart: this.chart3HighChart,
  };

  chart4: any = {
    event: null,
    eventType: null,
    eventSeriesDataType: null,
    options: {
      chart: {
        type: 'column'
      },
      title: {
        text: 'World\'s largest cities per 2021'
      },
      subtitle: {
        text: 'Source: <a href="https://worldpopulationreview.com/world-cities" target="_blank">World Population Review</a>'
      },
      xAxis: {
        type: 'category',
        labels: {
          rotation: -45,
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Population (millions)'
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: 'Population in 2021: <b>{point.y:.1f} millions</b>'
      },
      series: [{
        name: 'Population',
        colors: [
          '#9b20d9', '#9215ac', '#861ec9', '#7a17e6', '#7010f9', '#691af3',
          '#6225ed', '#5b30e7', '#533be1', '#4c46db', '#4551d5', '#3e5ccf',
          '#3667c9', '#2f72c3', '#277dbd', '#1f88b7', '#1693b1', '#0a9eaa',
          '#03c69b', '#00f194'
        ],
        colorByPoint: true,
        groupPadding: 0,
        data: [
          ['Tokyo', 37.33],
          ['Delhi', 31.18],
          ['Shanghai', 27.79],
          ['Sao Paulo', 22.23],
          ['Mexico City', 21.91],
          ['Dhaka', 21.74],
          ['Cairo', 21.32],
          ['Beijing', 20.89],
          ['Mumbai', 20.67],
          ['Osaka', 19.11],
          ['Karachi', 16.45],
          ['Chongqing', 16.38],
          ['Istanbul', 15.41],
          ['Buenos Aires', 15.25],
          ['Kolkata', 14.974],
          ['Kinshasa', 14.970],
          ['Lagos', 14.86],
          ['Manila', 14.16],
          ['Tianjin', 13.79],
          ['Guangzhou', 13.64]
        ],
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y:.1f}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      }]
    },
    highchart: this.chart4HighChart,
  };

  chart5: any = {
    event: null,
    eventType: null,
    eventSeriesDataType: null,
    options: null,
    highchart: this.chart5HighChart,
    customFunction: Function
  };

  chart6: any = {
    event: null,
    eventType: null,
    eventSeriesDataType: null,
    options: {
      chart: {
          type: 'area'
      },
      accessibility: {
          description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
      },
      title: {
          text: 'US and USSR nuclear stockpiles'
      },
      subtitle: {
          text: 'Source: <a href="https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces/" ' +
              'target="_blank">FAS</a>'
      },
      xAxis: {
          allowDecimals: false,
          accessibility: {
              rangeDescription: 'Range: 1940 to 2017.'
          }
      },
      yAxis: {
          title: {
              text: 'Nuclear weapon states'
          }
      },
      tooltip: {
          pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
      },
      plotOptions: {
          area: {
              pointStart: 1940,
              marker: {
                  enabled: false,
                  symbol: 'circle',
                  radius: 2,
                  states: {
                      hover: {
                          enabled: true
                      }
                  }
              }
          }
      },
      series: [{
          name: 'USA',
          data: [
              null, null, null, null, null, 2, 9, 13, 50, 170, 299, 438, 841,
              1169, 1703, 2422, 3692, 5543, 7345, 12298, 18638, 22229, 25540,
              28133, 29463, 31139, 31175, 31255, 29561, 27552, 26008, 25830,
              26516, 27835, 28537, 27519, 25914, 25542, 24418, 24138, 24104,
              23208, 22886, 23305, 23459, 23368, 23317, 23575, 23205, 22217,
              21392, 19008, 13708, 11511, 10979, 10904, 11011, 10903, 10732,
              10685, 10577, 10526, 10457, 10027, 8570, 8360, 7853, 5709, 5273,
              5113, 5066, 4897, 4881, 4804, 4717, 4571, 4018, 3822, 3785, 3805,
              3750, 3708, 3708
          ]
      }, {
          name: 'USSR/Russia',
          data: [null, null, null, null, null, null, null, null, null,
              1, 5, 25, 50, 120, 150, 200, 426, 660, 863, 1048, 1627, 2492,
              3346, 4259, 5242, 6144, 7091, 8400, 9490, 10671, 11736, 13279,
              14600, 15878, 17286, 19235, 22165, 24281, 26169, 28258, 30665,
              32146, 33486, 35130, 36825, 38582, 40159, 38107, 36538, 35078,
              32980, 29154, 26734, 24403, 21339, 18179, 15942, 15442, 14368,
              13188, 12188, 11152, 10114, 9076, 8038, 7000, 6643, 6286, 5929,
              5527, 5215, 4858, 4750, 4650, 4600, 4500, 4490, 4300, 4350, 4330,
              4310, 4495, 4477
          ]
      }]
  },
    highchart: this.chart6HighChart,
    customFunction: Function
  };

  
  constructor(private readonly cdr: ChangeDetectorRef, private readonly http: HttpClient){

  }


  ngOnInit(): void {
    this.chart3HighChart.setOptions({
      colors: Highcharts.map(this.chart3HighChart.getOptions().colors, (color: any) => {
        return {
          radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 0.7
          },
          stops: [
            [0, color],
            [1, this.chart3HighChart.color(color).brighten(-0.3).get('rgb')] // darken
          ]
        };
      })
    });
  }

  ngAfterViewInit(): void {
    this.loadHighChart5();
  }

  loadHighChart5() {
    const data = [
      {
        name: 'United States of America',
        value: 1477
      },
      {
        name: 'Brazil',
        value: 490
      },
      {
        name: 'Mexico',
        value: 882
      },
      {
        name: 'Canada',
        value: 161
      },
      {
        name: 'Russia',
        value: 74
      },
      {
        name: 'Argentina',
        value: 416
      },
      {
        name: 'Bolivia',
        value: 789
      },
      {
        name: 'Colombia',
        value: 805
      },
      {
        name: 'Paraguay',
        value: 2011
      },
      {
        name: 'Indonesia',
        value: 372
      },
      {
        name: 'South Africa',
        value: 466
      },
      {
        name: 'Papua New Guinea',
        value: 1239
      },
      {
        name: 'Germany',
        value: 1546
      },
      {
        name: 'China',
        value: 54
      },
      {
        name: 'Chile',
        value: 647
      },
      {
        name: 'Australia',
        value: 62
      },
      {
        name: 'France',
        value: 844
      },
      {
        name: 'United Kingdom',
        value: 1901
      },
      {
        name: 'Venezuela',
        value: 503
      },
      {
        name: 'Ecuador',
        value: 1560
      },
      {
        name: 'India',
        value: 116
      },
      {
        name: 'Iran',
        value: 208
      },
      {
        name: 'Guatemala',
        value: 2716
      },
      {
        name: 'Philippines',
        value: 828
      },
      {
        name: 'Sweden',
        value: 563
      },
      {
        name: 'Saudi Arabia',
        value: 100
      },
      {
        name: 'Democratic Republic of the Congo',
        value: 87
      },
      {
        name: 'Kenya',
        value: 346
      },
      {
        name: 'Zimbabwe',
        value: 507
      },
      {
        name: 'Peru',
        value: 149
      },
      {
        name: 'Ukraine',
        value: 323
      },
      {
        name: 'Angola',
        value: 141
      },
      {
        name: 'Japan',
        value: 480
      },
      {
        name: 'United Republic of Tanzania',
        value: 187
      },
      {
        name: 'Costa Rica',
        value: 3153
      },
      {
        name: 'Algeria',
        value: 66
      },
      {
        name: 'Pakistan',
        value: 196
      },
      {
        name: 'Spain',
        value: 301
      },
      {
        name: 'Finland',
        value: 487
      },
      {
        name: 'Nicaragua',
        value: 1225
      },
      {
        name: 'Libya',
        value: 83
      },
      {
        name: 'Cuba',
        value: 1211
      },
      {
        name: 'Uruguay',
        value: 760
      },
      {
        name: 'Oman',
        value: 426
      },
      {
        name: 'Italy',
        value: 439
      },
      {
        name: 'Czech Republic',
        value: 1657
      },
      {
        name: 'Poland',
        value: 414
      },
      {
        name: 'New Zealand',
        value: 465
      },
      {
        name: 'Guyana',
        value: 594
      },
      {
        name: 'Panama',
        value: 1574
      },
      {
        name: 'Malaysia',
        value: 347
      },
      {
        name: 'Namibia',
        value: 136
      },
      {
        name: 'South Korea',
        value: 1145
      },
      {
        name: 'Honduras',
        value: 921
      },
      {
        name: 'Iraq',
        value: 233
      },
      {
        name: 'Thailand',
        value: 198
      },
      {
        name: 'Mozambique',
        value: 125
      },
      {
        name: 'Turkey',
        value: 127
      },
      {
        name: 'Iceland',
        value: 958
      },
      {
        name: 'Kazakhstan',
        value: 36
      },
      {
        name: 'Norway',
        value: 312
      },
      {
        name: 'Syria',
        value: 484
      },
      {
        name: 'Zambia',
        value: 118
      },
      {
        name: 'South Sudan',
        value: 132
      },
      {
        name: 'Egypt',
        value: 83
      },
      {
        name: 'Madagascar',
        value: 143
      },
      {
        name: 'North Korea',
        value: 681
      },
      {
        name: 'Denmark',
        value: 1885
      },
      {
        name: 'Greece',
        value: 589
      },
      {
        name: 'Botswana',
        value: 131
      },
      {
        name: 'Sudan',
        value: 43
      },
      {
        name: 'Croatia',
        value: 1233
      },
      {
        name: 'Bulgaria',
        value: 627
      },
      {
        name: 'El Salvador',
        value: 3282
      },
      {
        name: 'Belarus',
        value: 320
      },
      {
        name: 'Myanmar',
        value: 98
      },
      {
        name: 'Portugal',
        value: 700
      },
      {
        name: 'Switzerland',
        value: 1575
      },
      {
        name: 'The Bahamas',
        value: 6094
      },
      {
        name: 'Lithuania',
        value: 973
      },
      {
        name: 'Somalia',
        value: 97
      },
      {
        name: 'Chad',
        value: 47
      },
      {
        name: 'Ethiopia',
        value: 52
      },
      {
        name: 'Yemen',
        value: 108
      },
      {
        name: 'Morocco',
        value: 123
      },
      {
        name: 'Suriname',
        value: 353
      },
      {
        name: 'French Polynesia',
        value: 14110
      },
      {
        name: 'Nigeria',
        value: 59
      },
      {
        name: 'Uzbekistan',
        value: 125
      },
      {
        name: 'Afghanistan',
        value: 80
      },
      {
        name: 'Austria',
        value: 631
      },
      {
        name: 'Belize',
        value: 2061
      },
      {
        name: 'Israel',
        value: 2186
      },
      {
        name: 'Nepal',
        value: 328
      },
      {
        name: 'Uganda',
        value: 238
      },
      {
        name: 'Romania',
        value: 196
      },
      {
        name: 'Vietnam',
        value: 145
      },
      {
        name: 'Gabon',
        value: 171
      },
      {
        name: 'Mongolia',
        value: 28
      },
      {
        name: 'United Arab Emirates',
        value: 514
      },
      {
        name: 'Latvia',
        value: 675
      },
      {
        name: 'Belgium',
        value: 1354
      },
      {
        name: 'Hungary',
        value: 458
      },
      {
        name: 'Laos',
        value: 178
      },
      {
        name: 'Ireland',
        value: 581
      },
      {
        name: 'Central African Republic',
        value: 63
      },
      {
        name: 'Azerbaijan',
        value: 448
      },
      {
        name: 'Taiwan',
        value: 1147
      },
      {
        name: 'Dominican Republic',
        value: 745
      },
      {
        name: 'Solomon Islands',
        value: 1286
      },
      {
        name: 'Slovakia',
        value: 728
      },
      {
        name: 'Cameroon',
        value: 70
      },
      {
        name: 'Malawi',
        value: 340
      },
      {
        name: 'Vanuatu',
        value: 2543
      },
      {
        name: 'Mauritania',
        value: 29
      },
      {
        name: 'Niger',
        value: 24
      },
      {
        name: 'Liberia',
        value: 301
      },
      {
        name: 'Netherlands',
        value: 856
      },
      {
        name: 'Puerto Rico',
        value: 3237
      },
      {
        name: 'Tunisia',
        value: 187
      },
      {
        name: 'Fiji',
        value: 1532
      },
      {
        name: 'Jamaica',
        value: 2585
      },
      {
        name: 'Kyrgyzstan',
        value: 146
      },
      {
        name: 'Republic of the Congo',
        value: 79
      },
      {
        name: 'Ivory Coast',
        value: 85
      },
      {
        name: 'Republic of Serbia',
        value: 336
      },
      {
        name: 'Turkmenistan',
        value: 55
      },
      {
        name: 'Mali',
        value: 20
      },
      {
        name: 'New Caledonia',
        value: 1368
      },
      {
        name: 'Bosnia and Herzegovina',
        value: 469
      },
      {
        name: 'Lesotho',
        value: 791
      },
      {
        name: 'Tajikistan',
        value: 170
      },
      {
        name: 'Antarctica',
        value: 2
      },
      {
        name: 'Burkina Faso',
        value: 84
      },
      {
        name: 'Georgia',
        value: 316
      },
      {
        name: 'Senegal',
        value: 104
      },
      {
        name: 'Kiribati',
        value: 23428
      },
      {
        name: 'Sri Lanka',
        value: 294
      },
      {
        name: 'Bangladesh',
        value: 138
      },
      {
        name: 'Estonia',
        value: 425
      },
      {
        name: 'Jordan',
        value: 203
      },
      {
        name: 'Cambodia',
        value: 91
      },
      {
        name: 'Guinea',
        value: 65
      },
      {
        name: 'Slovenia',
        value: 794
      },
      {
        name: 'Northern Cyprus',
        value: 1623
      },
      {
        name: 'Greenland',
        value: 7
      },
      {
        name: 'Marshall Islands',
        value: 82873
      },
      {
        name: 'Swaziland',
        value: 814
      },
      {
        name: 'Haiti',
        value: 508
      },
      {
        name: 'Seychelles',
        value: 30769
      },
      {
        name: 'Djibouti',
        value: 561
      },
      {
        name: 'Eritrea',
        value: 129
      },
      {
        name: 'Armenia',
        value: 390
      },
      {
        name: 'Cook Islands',
        value: 46610
      },
      {
        name: 'Ghana',
        value: 44
      },
      {
        name: 'Macedonia',
        value: 393
      },
      {
        name: 'Cape Verde',
        value: 2232
      },
      {
        name: 'Maldives',
        value: 30201
      },
      {
        name: 'Singapore',
        value: 12690
      },
      {
        name: 'Guinea Bissau',
        value: 284
      },
      {
        name: 'Lebanon',
        value: 782
      },
      {
        name: 'Sierra Leone',
        value: 112
      },
      {
        name: 'Togo',
        value: 147
      },
      {
        name: 'Turks and Caicos Islands',
        value: 8439
      },
      {
        name: 'Burundi',
        value: 273
      },
      {
        name: 'Equatorial Guinea',
        value: 250
      },
      {
        name: 'Falkland Islands',
        value: 575
      },
      {
        name: 'Kuwait',
        value: 393
      },
      {
        name: 'Moldova',
        value: 213
      },
      {
        name: 'Rwanda',
        value: 284
      },
      {
        name: 'Benin',
        value: 54
      },
      {
        name: 'East Timor',
        value: 403
      },
      {
        name: 'Kosovo',
        value: 551
      },
      {
        name: 'Micronesia',
        value: 8547
      },
      {
        name: 'Qatar',
        value: 518
      },
      {
        name: 'Saint Vincent and the Grenadines',
        value: 15424
      },
      {
        name: 'Tonga',
        value: 8368
      },
      {
        name: 'Western Sahara',
        value: 23
      },
      {
        name: 'Guam',
        value: 9191
      },
      {
        name: 'Mauritius',
        value: 2463
      },
      {
        name: 'Montenegro',
        value: 372
      },
      {
        name: 'Northern Mariana Islands',
        value: 10776
      },
      {
        name: 'Albania',
        value: 146
      },
      {
        name: 'Bahrain',
        value: 5263
      },
      {
        name: 'British Virgin Islands',
        value: 26490
      },
      {
        name: 'Comoros',
        value: 1790
      },
      {
        name: 'French Southern and Antarctic Lands',
        value: 522
      },
      {
        name: 'Samoa',
        value: 1418
      },
      {
        name: 'Spratly Islands',
        value: 800000
      },
      {
        name: 'Svalbard',
        value: 64
      },
      {
        name: 'Trinidad and Tobago',
        value: 780
      },
      {
        name: 'American Samoa',
        value: 13393
      },
      {
        name: 'Antigua and Barbuda',
        value: 6778
      },
      {
        name: 'Cayman Islands',
        value: 11364
      },
      {
        name: 'Grenada',
        value: 8721
      },
      {
        name: 'Palau',
        value: 6536
      },
      {
        name: 'Palestinian Territories',
        value: 500
      },
      {
        name: 'Anguilla',
        value: 21978
      },
      {
        name: 'Bhutan',
        value: 52
      },
      {
        name: 'Dominica',
        value: 2663
      },
      {
        name: 'Guernsey',
        value: 25608
      },
      {
        name: 'Hong Kong',
        value: 1864
      },
      {
        name: 'Luxembourg',
        value: 773
      },
      {
        name: 'Saint Kitts and Nevis',
        value: 7663
      },
      {
        name: 'Saint Lucia',
        value: 3300
      },
      {
        name: 'Saint Pierre and Miquelon',
        value: 8264
      },
      {
        name: 'São Tomé and Príncipe',
        value: 2075
      },
      {
        name: 'Virgin Islands of the U.S.',
        value: 5780
      },
      {
        name: 'Wallis and Futuna',
        value: 14085
      },
      {
        name: 'Aruba',
        value: 5556
      },
      {
        name: 'Barbados',
        value: 2326
      },
      {
        name: 'Bermuda',
        value: 18657
      },
      {
        name: 'British Indian Ocean Territory',
        value: 16667
      },
      {
        name: 'Brunei',
        value: 190
      },
      {
        name: 'Faroe Islands',
        value: 718
      },
      {
        name: 'Gambia',
        value: 99
      },
      {
        name: 'Gibraltar',
        value: 153846
      },
      {
        name: 'Jan Mayen',
        value: 2653
      },
      {
        name: 'Jersey',
        value: 8621
      },
      {
        name: 'Macau',
        value: 35461
      },
      {
        name: 'Malta',
        value: 3165
      },
      {
        name: 'Isle of Man',
        value: 1748
      },
      {
        name: 'Montserrat',
        value: 9804
      },
      {
        name: 'Nauru',
        value: 47170
      },
      {
        name: 'Niue',
        value: 3846
      },
      {
        name: 'Paracel Islands',
        value: 129032
      },
      {
        name: 'Saint Barthelemy',
        value: 40000
      },
      {
        name: 'Saint Helena, Ascension and Tristan da Cunha',
        value: 2538
      },
      {
        name: 'Saint Martin',
        value: 18382
      },
      {
        name: 'Sint Maarten',
        value: 29412
      },
      {
        name: 'Tuvalu',
        value: 39063
      },
      {
        name: 'Wake Island',
        value: 153846
      }
    ];

    const getGraticule = () => {
      const data = [];

      // Meridians
      for (let x = -180; x <= 180; x += 15) {
        data.push({
          geometry: {
            type: 'LineString',
            coordinates: x % 90 === 0 ? [
              [x, -90],
              [x, 0],
              [x, 90]
            ] : [
              [x, -80],
              [x, 80]
            ]
          }
        });
      }

      // Latitudes
      for (let y = -90; y <= 90; y += 10) {
        const coordinates = [];
        for (let x = -180; x <= 180; x += 5) {
          coordinates.push([x, y]);
        }
        data.push({
          geometry: {
            type: 'LineString',
            coordinates
          },
          lineWidth: y === 0 ? 2 : undefined
        });
      }

      return data;
    };

    // Add flight route after initial animation
    const afterAnimate = (e: any) => {
      const chart = e.target.chart;

      if (!chart.get('flight-route')) {
        chart.addSeries({
          type: 'mapline',
          name: 'Flight route, Amsterdam - Los Angeles',
          animation: false,
          id: 'flight-route',
          data: [{
            geometry: {
              type: 'LineString',
              coordinates: [
                [4.90, 53.38], // Amsterdam
                [-118.24, 34.05] // Los Angeles
              ]
            },
            color: '#313f77'
          }],
          lineWidth: 2,
          accessibility: {
            exposeAsGroupOnly: true
          }
        }, false);
        chart.addSeries({
          type: 'mappoint',
          animation: false,
          data: [{
            name: 'Amsterdam',
            geometry: {
              type: 'Point',
              coordinates: [4.90, 53.38]
            }
          }, {
            name: 'LA',
            geometry: {
              type: 'Point',
              coordinates: [-118.24, 34.05]
            }
          }],
          color: '#313f77',
          accessibility: {
            enabled: false
          }
        }, false);
        chart.redraw(false);
      }
    };

    this.chart5.customFunction = (container: any) => {
      console.log('chart5HighChart');
      console.log(this.chart5HighChart);

      this.http.get('https://code.highcharts.com/mapdata/custom/world.topo.json').subscribe(res => {
      this.chart5.options = {
        chart: {
          map: res
        },

        title: {
          text: 'Airport density per country',
          floating: true,
          align: 'left',
          style: {
            textOutline: '2px white'
          }
        },

        subtitle: {
          text: 'Source: <a href="http://www.citypopulation.de/en/world/bymap/airports/">citypopulation.de</a><br>' +
            'Click and drag to rotate globe<br>',
          floating: true,
          y: 34,
          align: 'left'
        },

        legend: {
          enabled: false
        },

        mapNavigation: {
          enabled: true,
          enableDoubleClickZoomTo: true,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },

        mapView: {
          maxZoom: 30,
          projection: {
            name: 'Orthographic',
            rotation: [60, -30]
          }
        },

        colorAxis: {
          tickPixelInterval: 100,
          minColor: '#BFCFAD',
          maxColor: '#31784B',
          max: 1000
        },

        tooltip: {
          pointFormat: '{point.name}: {point.value}'
        },

        plotOptions: {
          series: {
            animation: {
              duration: 750
            },
            clip: false
          }
        },

        series: [{
          name: 'Graticule',
          id: 'graticule',
          type: 'mapline',
          data: getGraticule(),
          nullColor: 'rgba(0, 0, 0, 0.05)',
          accessibility: {
            enabled: false
          },
          enableMouseTracking: false
        }, {
          data,
          joinBy: 'name',
          name: 'Airports per million km²',
          states: {
            hover: {
              color: '#a4edba',
              borderColor: '#333333'
            }
          },
          dataLabels: {
            enabled: false,
            format: '{point.name}'
          },
          events: {
            afterAnimate
          },
          accessibility: {
            exposeAsGroupOnly: true
          }
        }]
      };
      const chart = this.chart5HighChart.mapChart(container, this.chart5.options);

      // Render a circle filled with a radial gradient behind the globe to
      // make it appear as the sea around the continents
      const renderSea = () => {
        let verb = 'animate';
        if (!chart.sea) {
          chart.sea = chart.renderer
            .circle()
            .attr({
              fill: {
                radialGradient: {
                  cx: 0.4,
                  cy: 0.4,
                  r: 1
                },
                stops: [
                  [0, 'white'],
                  [1, 'lightblue']
                ]
              },
              zIndex: -1
            })
            .add(chart.get('graticule').group);
          verb = 'attr';
        }

        const bounds = chart.get('graticule').bounds,
          p1 = chart.mapView.projectedUnitsToPixels({
            x: bounds.x1,
            y: bounds.y1
          }),
          p2 = chart.mapView.projectedUnitsToPixels({
            x: bounds.x2,
            y: bounds.y2
          });
        chart.sea[verb]({
          cx: (p1.x + p2.x) / 2,
          cy: (p1.y + p2.y) / 2,
          r: Math.min(p2.x - p1.x, p1.y - p2.y) / 2
        });
      };
      renderSea();
      this.chart5HighChart.addEvent(chart, 'redraw', renderSea);
      })
    }

    this.chart5.options = {};
    this.cdr.detectChanges();
  }


  // Function to get a random integer between 1 and 100
  getRandomInt() {
    return Math.floor(Math.random() * 100) + 1;
  }
}
