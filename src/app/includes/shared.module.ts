import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [],
    imports: [CommonModule, TranslateModule.forChild()],
    exports: [CommonModule, TranslateModule, HttpClientModule],
})
export class SharedModule {}
