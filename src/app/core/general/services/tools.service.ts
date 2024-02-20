import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  public ListToTree(list: any[], childPropertyName: string) {
    var map: any = {}, node: any, roots: any[] = [], i: number;

    for (i = 0; i < list.length; i += 1) {
      map[list[i].id] = i; // initialize the map
      //list[i][childPropertyName] = []; // initialize the children
    }

    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      if (node.parentId !== "0" && node.parentId != null) {
        // if you have dangling branches check that map[node.parentId] exists

        if (list[map[node.parentId]][childPropertyName] == null) {
          list[map[node.parentId]][childPropertyName] = [];
        }

        list[map[node.parentId]][childPropertyName].push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
  }

  public addDataToUrl(data: any) {
    const searchParams = new URLSearchParams(data);

    // Get the current URL
    const currentUrl = window.location.href;

    // Get the base URL without query parameters
    const baseUrl = currentUrl.split('?')[0];

    // Construct the new URL by adding the text
    const newUrl = `${currentUrl}?${searchParams.toString()}`;

    // Modify the URL without reloading
    window.history.replaceState(null, '', newUrl);
  }

  public clearUrlParams(){
    // Get the current URL
    const currentUrl = window.location.href;
    // Get the base URL without query parameters
    const baseUrl = currentUrl.split('?')[0];
    // Modify the URL without reloading
    window.history.replaceState(null, '', baseUrl);
  }
}
