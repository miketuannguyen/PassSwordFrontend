import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [],
    imports: [CommonModule, TranslateModule.forChild()],
    exports: [
        CommonModule,
        TranslateModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
})
export class SharedModule {}
