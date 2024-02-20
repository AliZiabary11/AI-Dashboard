import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToolsService } from '@hp/core/general/services/tools.service';
import {
  ColDef,
  ColGroupDef,
  GridReadyEvent,
  SideBarDef,
} from 'ag-grid-community';

@Component({
  selector: 'hp-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {

  // dynamic Input
  @Input() data: any;
  @Input() urlData: any;

  public columnDefs: (ColDef | ColGroupDef)[] = [
    {
      headerName: ' ',
      headerCheckboxSelection: true,
      checkboxSelection: true,
      floatingFilter: false,
      suppressMenu: true,
      minWidth: 55,
      maxWidth: 55,
      width: 55,
      flex: 0,
      resizable: false,
      sortable: false,
      editable: false,
      filter: false,
      suppressColumnsToolPanel: true,
    },
    {
      headerName: 'Participant',
      children: [
        { field: 'athlete', minWidth: 170 },
        { field: 'country', minWidth: 150 },
      ],
    },
    { field: 'sport' },
    {
      headerName: 'Medals',
      children: [
        {
          field: 'total',
          columnGroupShow: 'closed',
          filter: 'agNumberColumnFilter',
          width: 120,
          flex: 0,
        },
        {
          field: 'gold',
          columnGroupShow: 'open',
          filter: 'agNumberColumnFilter',
          width: 100,
          flex: 0,
        },
        {
          field: 'silver',
          columnGroupShow: 'open',
          filter: 'agNumberColumnFilter',
          width: 100,
          flex: 0,
        },
        {
          field: 'bronze',
          columnGroupShow: 'open',
          filter: 'agNumberColumnFilter',
          width: 100,
          flex: 0,
        },
      ],
    },
    { field: 'year', filter: 'agNumberColumnFilter' },
  ];
  public rowSelection: 'single' | 'multiple' = 'multiple';
  public defaultColDef: ColDef = {
    editable: true,
    sortable: true,
    minWidth: 100,
    filter: true,
    resizable: true,
    floatingFilter: true,
    flex: 1,
  };
  public sideBar: SideBarDef | string | string[] | boolean | null = {
    toolPanels: ['columns', 'filters'],
    defaultToolPanel: '',
  };
  public rowData!: any[];

  constructor(private toolsService: ToolsService, private http: HttpClient, private cd: ChangeDetectorRef, private readonly router: Router) { }

  onGridReady(params: GridReadyEvent<any>) {
    if (this.urlData != null) {
      this.toolsService.addDataToUrl(JSON.parse(this.urlData));
    }

    this.http
      .get<any[]>(
        './assets/json-samples/olympic-winners.json'
      )
      .subscribe((data) => {
        this.rowData = data
        this.cd.detectChanges();
      });
  }

  onActiveTab(){
    console.log('onActiveTab');
  }
  
}
