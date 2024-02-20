import { MenuItem } from 'primeng/api';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'vid-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent implements OnInit {
  value: string = '';

  toolBarSearch='';

  inputNumberValue: number = 10;

  checkBoxValue: any[] = [];

  switchValue = true;

  textAreaValue: string = '';

  menuItems:MenuItem[]=[
    {
      label: 'فایل',
      items: [
        {
          label: 'جدید',
          icon: 'pi pi-fw pi-plus',
          items: [{ label: 'Project' }, { label: 'Other' }],
        },
        { label: 'بازکردن' },
        { label: 'خروج' },
      ],
    },
    {
      label: 'ویرایش',
      icon: 'pi pi-fw pi-pencil',
      items: [
        { label: 'حذف', icon: 'pi pi-fw pi-trash' },
        { label: 'بارگزاری مجدد', icon: 'pi pi-fw pi-refresh' },
      ],
    },
  ];


  listBoxOptions: any[] = [
    { name: 'اصفهان', code: 'NY' },
    { name: 'شیراز', code: 'RM' },
    { name: 'تبریز', code: 'LDN' },
    { name: 'مشهد', code: 'IST' },
    { name: 'رشت', code: 'PRS' },
  ];
  listBoxSelectValue: any = {};

  multiSelectOptions: any[] = [
    { name: 'اصفهان', code: 'NY' },
    { name: 'شیراز', code: 'RM' },
    { name: 'تبریز', code: 'LDN' },
    { name: 'مشهد', code: 'IST' },
    { name: 'رشت', code: 'PRS' },
  ];
  multiSelectValue: any[] = [];

  dropDownOptions: any[] = [
    { name: 'اصفهان', code: 'NY' },
    { name: 'شیراز', code: 'RM' },
    { name: 'تبریز', code: 'LDN' },
    { name: 'مشهد', code: 'IST' },
    { name: 'رشت', code: 'PRS' },
  ];
  dropDownSelectValue: any = {};

  constructor(private readonly cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  onSave() {
    console.log(this.dropDownSelectValue.name);
    alert('ذخیره شد');
  }

  onToolbarClick(message:string){
    alert(message);
  }
}
