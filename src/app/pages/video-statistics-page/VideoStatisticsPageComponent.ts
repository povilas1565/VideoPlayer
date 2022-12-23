import { Component, OnInit } from '@angular/core';
import {SSChartType, SSDataChartConfig } from 'src/app/common/components/ss-data-chart/SSDataChartComponent';
import { TrackerService } from 'src/app/common/services/TrackerService';

@Component({
    templateUrl: 'VideoStatisticsPage.html',
    providers: [TrackerService]
})
export class VideoStatisticsPageComponent implements OnInit {
    videoStatsDurationChartConfig: SSDataChartConfig = new SSDataChartConfig();
    videoStatsImpressionChartConfig: SSDataChartConfig = new SSDataChartConfig();
    videoStatsWatchingTimesPerImpressionChartConfig?: SSDataChartConfig;
    videoStatsChartData: Array<any> = [];

    constructor(private trackerService: TrackerService) { }

    ngOnInit(): void {
        this.videoStatsDurationChartConfig = {
            labelProperty: 'title',
            datasets: [{
                type: SSChartType.Bar,
                label: 'Total Duration',
                valueProperty: 'duration'
            },
                {
                    type: SSChartType.Bar,
                    label: 'Duration Per Impression',
                    valueProperty: 'durationPerImpression'
                }],
            options: {
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                title: {
                    display: true,
                    text: 'Total Watching Times and Watching Times Per Impression In Seconds'
                },
                legend: {
                    display: false
                }
            }
        };

        this.videoStatsImpressionChartConfig = {
            labelProperty: 'title',
            datasets: [{
                type: SSChartType.Bar,
                label: 'Number of Impressions',
                valueProperty: 'impression'
            }],
            options: {
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                title: {
                    display: true,
                    text: 'Total Number of Impressions'
                },
                legend: {
                    display: false
                }
            }
        };

        this.videoStatsChartData = this.trackerService.getTrackingData();
    }
}
