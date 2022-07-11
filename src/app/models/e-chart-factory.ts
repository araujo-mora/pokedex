import * as _ from "lodash";
import { EChartModel } from "./e-chart-model";

export class EChartFactory {
    static PIE_MAX = 15;
    static orange = '#F57C00';
    static yellow = '#FBC02D';
    static green = '#34bfa3';
    static blue = '#36a3f7';
    static red = '#f4516c';
    static colors = ["#0767bf","#0a8aff","#08e5d9","#2d08bf","#3c0bff","#7300e5","#ae00ff","#ffd900","#e5a700","#ffa100","#e57100","#e55000","#ff5900","#e53200","#999999","#333333","#FCD202","#FF6600","#DDDDDD"];
    
    static createGenericBarchart(dataTable: EChartModel, imgFormat: any, dataType: any, labelConfig: any, fontSizeLabel: any) {
        var options: any;
        options = {
            title: {
                text: dataTable.title,
                textStyle: {
                    fontSize: 15,
                },
                x: 'center'
            },
            tooltip: {
                trigger: 'axis',
                confine: true,
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#283b56'
                    },
                }
            },
            legend: {
                top: 21,
                textStyle: {
                    fontSize: 12,
                },
                data: _.cloneDeep(dataTable.legends)
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: {
                        show: false,
                        readOnly: false
                    },
                    restore: {
                        title: "restore",
                        show: false
                    },
                    saveAsImage: {
                        show: true,
                        title: 'Save img',
                        type: imgFormat,
                        lang: ['en']
                    }
                }
            },
            xAxis: [
                {
                    name: "",
                    nameLocation: 'center',
                    position: 'center',
                    nameTextStyle: {
                        fontWeight: 'normal',
                        fontSize: 14
                    },
                    axisLabel: {
                        align: 'center',
                        fontSize: fontSizeLabel,
                        margin: 15
                    },
                    data: this.getXLabels(dataTable, labelConfig, true),
                }
            ],
            yAxis: {},
            series: [
                {
                    data: dataTable.seriesData[0],
                    type: dataType,
                }
            ]
        };
        return options;
    }

    static getXLabels(dataTable, labelType: any, shortLabel: any = false) {
        return _.map(dataTable.xAxisData, (data: any, i) => {
            var label: string = "";
            if (labelType == 1) {
                label = data;
            } else if (labelType == 2) {
                if (dataTable.xAxisSubLabel && dataTable.xAxisSubLabel.length > 0) {
                    // label = dataTable.xAxisSubLabel[i];
                    label = dataTable.xAxisSubLabel[i];
                    if (shortLabel) {
                        label = label.substr(0, 17) + "...";
                    }
                } else {
                    label = data;
                }
            } else if (labelType == 3) {
                if (dataTable.xAxisSubLabel && dataTable.xAxisSubLabel.length > 0) {
                    var shortScr = dataTable.xAxisSubLabel[i];
                    if (shortLabel) {
                        shortScr = shortScr.substr(0, 17) + "...";
                    }
                    label = data + "\n" + shortScr;
                } else {
                    label = data;
                }
            }
            return label;
        });
    }
}
