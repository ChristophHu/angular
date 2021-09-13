import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/core/service/config.service';

type Layout = 'empty' | 'modern' | 'admin'
type Scheme = 'light' | 'dark'
type Theme = 'default' | string

interface AppConfig {
    layout: Layout
    scheme: Scheme
    theme: Theme
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {

  layout: Layout = 'empty'
  scheme: Scheme = 'dark'
  theme: string = 'default'
  config: AppConfig = { layout: this.layout, scheme: this.scheme, theme: this.theme }

  constructor( @Inject(DOCUMENT) private _document: any, private _activatedRoute: ActivatedRoute, private _configService: ConfigService) {}

  ngOnInit(): void {
    // layout
    let route = this._activatedRoute
    const paths = route.pathFromRoot

    paths.forEach((path) => {
      if ( path.routeConfig && path.routeConfig.data && path.routeConfig.data.layout ) {
        // Set the layout
        this.layout = path.routeConfig.data.layout
      }
    })

    this._configService.config$
      .subscribe((config: AppConfig) => {
        this.config = config

        this._updateScheme()
        this._updateTheme()
        this._updateLayout()
      });

    this.setLayout('empty')
  }

  private _updateScheme() {
    this._document.body.classList.remove('light', 'dark');
    this._document.body.classList.add(this.scheme);
  }

  private _updateTheme(): void {
    this._document.body.classList.forEach((className: string) => {
      if ( className.startsWith('theme-') ) {
        this._document.body.classList.remove(className, className.split('-')[1]);
      }
    });
    this._document.body.classList.add(`theme-${this.theme}`);
  }

  setLayout(layout: string) {
    this._configService.config = { layout }
  }

  private _updateLayout(): void {
    // Get the current activated route
    // let route = this._activatedRoute;
    // while ( route.firstChild )
    // {
    //     route = route.firstChild;
    // }

    // 1. Set the layout from the config
    this.layout = this.config.layout;
    console.log(this.config.layout)

    // 2. Get the query parameter from the current route and
    // set the layout and save the layout to the config
    // const layoutFromQueryParam = (route.snapshot.queryParamMap.get('layout') as Layout);
    // if ( layoutFromQueryParam )
    // {
    //     this.layout = layoutFromQueryParam;
    //     if ( this.config ) {
    //         this.config.layout = layoutFromQueryParam;
    //     }
    // }

    // 3. Iterate through the paths and change the layout as we find
    // a config for it.
    //
    // The reason we do this is that there might be empty grouping
    // paths or componentless routes along the path. Because of that,
    // we cannot just assume that the layout configuration will be
    // in the last path's config or in the first path's config.
    //
    // So, we get all the paths that matched starting from root all
    // the way to the current activated route, walk through them one
    // by one and change the layout as we find the layout config. This
    // way, layout configuration can live anywhere within the path and
    // we won't miss it.
    //
    // Also, this will allow overriding the layout in any time so we
    // can have different layouts for different routes.
    // const paths = route.pathFromRoot;
    // paths.forEach((path) => {

    //   // Check if there is a 'layout' data
    //   if ( path.routeConfig && path.routeConfig.data && path.routeConfig.data.layout )
    //   {
    //     // Set the layout
    //     this.layout = path.routeConfig.data.layout;
    //     console.log(path.routeConfig.data.layout)
    //   }
    // });
  }
}
