import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { Subscription } from 'rxjs';
import { DynamicTab } from '@hp/core/general/models/dynamic.model';
import { AdminMenuService, MenuChangeEvent } from '@hp/core/general/services/admin.menu.service';

@Component({
  selector: 'dynamic-tabview',
  templateUrl: './dynamic-tabview.component.html',
  styleUrls: ['./dynamic-tabview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DynamicTabviewComponent implements OnInit, OnDestroy {
  @ViewChild('tabView', { static: true }) tabView: any;
  tabs: any[] = [{ active: true, key: 'dashboard', title: 'Dashboard' }];

  subscription: Subscription[] = [];

  selectedTabIndex: number = 0;

  constructor(
    private readonly adminMenuService: AdminMenuService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly loaction: Location,
    private readonly cdr: ChangeDetectorRef,
  ) { }


  ngOnInit(): void {
    this.subscription.push(this.adminMenuService.menuSource$.subscribe(
      (value) => {
        if(value == null)
          return;

        if (!this.tabs.some(a => a.key == value.key)) {
          this.addNewTab(value);
        } else {
          this.activeTab(value);
        }
      }
    ));
  }


  onTabClick(index: number): void {
    var selectedTab = this.tabs[index];
    this.activeTab(selectedTab);
  }

  private activeTab(selectedTab: any) {
    this.tabs = this.tabs.map((tab) => {
      if (tab.key == selectedTab.key) {
        tab.active = true;
      } else {
        tab.active = false;
      }
      return tab;
    });

    this.changeAddressbar(selectedTab);
    this.cdr.detectChanges();
  }

  onCloseIcon(tabIndex: number): void {
    this.ifSelectedTabRemovedThenSelectAnotherOne(tabIndex);
    this.closeTab(tabIndex);
    this.cdr.detectChanges();
  }

  ifSelectedTabRemovedThenSelectAnotherOne(tabIndex: number): void {
    var selectedTab = this.tabs[tabIndex];
    if (this.tabs.some(tab => tab.key == selectedTab.key && tab.active == true)) {
      if (this.tabs.length - 1 > tabIndex) {
        this.activeTab(this.tabs[tabIndex + 1]);
      }

      if (this.tabs.length - 1 == tabIndex) {
        this.activeTab(this.tabs[tabIndex - 1]);
      }
    }
  }

  closeTab(tabIndex: number) {
    this.tabs.splice(tabIndex, 1);
    this.cdr.detectChanges();
  }

  trackByIdentity(index: number, item: any) {
    return item.key
  };

  addParamToUrl(): void {
    // changes the route without moving from the current view or
    // triggering a navigation event,
    this.router.navigate([], {
      queryParams: {
        newOrdNum: '123'
      },
      queryParamsHandling: 'merge',
    });
    this.cdr.detectChanges();
  }

  auxclick(e: any, index: number) {
    if (e.which == 2) {
      this.onCloseIcon(index);
    } else {
      this.onTabClick(index);
    }
  }

  private addNewTab(value: MenuChangeEvent) {
    var icon = value.item.icon;
    this.tabs.push({ active: true,urlData: value.item.urlData, key: value.key, title: value.item.label ?? value.item.title, icon: value.item.icon, item: new DynamicTab(value.item.moduleName) });
    var newTab = this.tabs.filter(tab => tab.key == value.key);
    this.activeTab(newTab[0]);
    this.cdr.detectChanges();
  }

  private changeAddressbar(tab: any) {
    if (tab.key == 'dashboard') {
      this.resetAddressbar();
    } else {
      this.loaction.replaceState('admin/' + tab.item.address);
    }
  }

  private resetAddressbar() {
    this.loaction.replaceState('admin');
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscriber) => {
      subscriber.unsubscribe();
    });
  }

}
