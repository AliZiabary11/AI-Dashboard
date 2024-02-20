import * as HighMaps from 'highcharts/highmaps';

import MapModule from 'highcharts/modules/map';
import ExportingModule from 'highcharts/modules/exporting';
import HC_exportData from 'highcharts/modules/export-data';
import Accessibility from 'highcharts/modules/accessibility';
import Data from 'highcharts/modules/data';




HC_exportData(HighMaps);
MapModule(HighMaps);
ExportingModule(HighMaps);
Accessibility(HighMaps);
Data(HighMaps);


export default HighMaps;
