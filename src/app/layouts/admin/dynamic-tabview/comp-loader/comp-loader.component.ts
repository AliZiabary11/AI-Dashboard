import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicTab } from '@hp/core/general/models/dynamic.model';
import { AlertService } from '@hp/core/general';

@Component({
  selector: 'comp-loader',
  templateUrl: './comp-loader.component.html',
  styleUrls: ['./comp-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompLoaderComponent implements OnInit {
  @ViewChild('dynamicComponents', { read: ViewContainerRef, static: true}) container?: ViewContainerRef;

  @Input() tab?: any;

  _active: boolean = false;
  @Input() get active(){
    return this._active;
  }
  set active(value: boolean){
    this._active = value;
    if(this.componentRef != null && value == true && (this.componentRef.instance).onActiveTab != null){
       (this.componentRef.instance).onActiveTab();
    }
  }

  componentRef: any;

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly cdr: ChangeDetectorRef,
    private readonly alertService: AlertService,

  ) {
   
  }

  ngOnInit(): void {
    if (this.tab != null && this.tab.item != null) {
      this.renderComponents(this.tab);
    }
  }

  async renderComponents(data: any) {
    await this.loadAndRenderComponents(data, this.container!);
    this.cdr.detectChanges();
  }

  async loadAndRenderComponents(tab: any, container: ViewContainerRef) {
    container.clear();
    var config: any = this.router.config.find((conf: any) => conf.path == tab.item.address);
    if (config == null) {
      this.alertService.alert('loading page', 'There is no page with specified address');
      return;
    }

    const module = await config.loadChildren();
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      module.rootComponent
    );
    this.componentRef = container.createComponent(factory);
    (this.componentRef.instance as DynamicTab).data = tab.item.data;
    (this.componentRef.instance as DynamicTab).urlData = tab.urlData;

  }
}
