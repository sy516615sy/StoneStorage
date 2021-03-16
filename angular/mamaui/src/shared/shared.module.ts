import { CommonModule, DecimalPipe } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
      RouterModule,
      CommonModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      //TranslateModule,
    ],
    declarations: [
    //   TimeFormatPipe,
    //   AppLoadingComponent,
    //   QrCodeDirective,
    //   DecimalControlDirective,
    //   MemberStatusPipe,
     
    ],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
    //   TimeFormatPipe,
    //   AppLoadingComponent,
    //   TranslateModule,
    //   DecimalControlDirective,
    //   MemberStatusPipe,
    ],
    entryComponents: []//[TwoFactorDialogComponent]
  })
export class SharedModule {
    
    static forRoot():ModuleWithProviders<SharedModule> {
      return {
        ngModule: SharedModule,
        providers: [
          DecimalPipe
        ]
      };
    }
}