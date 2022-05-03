import { ModuleWithProviders, NgModule, Provider, SecurityContext } from '@angular/core'
import { MarkdownLibraryComponent } from './markdown-library.component'
import { MarkdownLibraryService, SECURITY_CONTEXT } from './markdown-library.service'
import { MarkdownLibraryPipe } from './pipe/markdown-library.pipe'

export interface MarkdownModuleConfig {
  loader?: Provider
  markedOptions?: Provider
  sanitize?: SecurityContext
}

const sharedDeclarations = [
  // LanguagePipe,
  MarkdownLibraryComponent,
  MarkdownLibraryPipe,
]

@NgModule({
  declarations: [
    MarkdownLibraryComponent,
    MarkdownLibraryPipe
  ],
  imports: [],
  exports: [
    MarkdownLibraryComponent,
    MarkdownLibraryPipe
  ]
})

export class MarkdownLibraryModule {
  static forRoot(markdownModuleConfig?: MarkdownModuleConfig): ModuleWithProviders<MarkdownLibraryModule> {
    return {
      ngModule: MarkdownLibraryModule,
      providers: [
        MarkdownLibraryService,
        markdownModuleConfig && markdownModuleConfig.loader || [],
        markdownModuleConfig && markdownModuleConfig.markedOptions || [],
        {
          provide: SECURITY_CONTEXT,
          useValue: markdownModuleConfig && markdownModuleConfig.sanitize != null ? markdownModuleConfig.sanitize : SecurityContext.HTML,
        },
      ],
    }
  }

  static forChild(): ModuleWithProviders<MarkdownLibraryModule> {
    return {
      ngModule: MarkdownLibraryModule,
    }
  }
}
