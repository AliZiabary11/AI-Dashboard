import * as Highcharts from 'highcharts';

import MapModule from 'highcharts/modules/map';
import ExportingModule from 'highcharts/modules/exporting';
import HC_exportData from 'highcharts/modules/export-data';
import Accessibility from 'highcharts/modules/accessibility';
import Data from 'highcharts/modules/data';
import 'highcharts/highmaps';




HC_exportData(Highcharts);
MapModule(Highcharts);
ExportingModule(Highcharts);
Accessibility(Highcharts);
Data(Highcharts);


export default Highcharts;
