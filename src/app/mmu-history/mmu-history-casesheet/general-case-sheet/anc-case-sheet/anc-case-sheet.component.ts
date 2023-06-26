import { Component, OnInit, Input } from '@angular/core';
import { HttpServices } from 'app/services/http-services/http_services.service';
import { SetLanguageComponent } from 'app/set-language.component';

@Component({
  selector: 'app-anc-case-sheet',
  templateUrl: './anc-case-sheet.component.html',
  styleUrls: ['./anc-case-sheet.component.css']
})
export class AncCaseSheetComponent implements OnInit {
  @Input('data')
  caseSheetData: any
  aNCDetailsAndFormula: any;
  aNCImmunization: any;
  languageComponent: SetLanguageComponent;
  currentLanguageSet: any;
  

  constructor(private httpServiceService: HttpServices) { }

  ngOnInit() {
    this.fetchLanguageResponse();
  }

  ngOnChanges() {
    if (this.caseSheetData && this.caseSheetData.nurseData && this.caseSheetData.nurseData.anc) {
      this.aNCDetailsAndFormula = this.caseSheetData.nurseData.anc.ANCCareDetail;
      this.aNCImmunization = this.caseSheetData.nurseData.anc.ANCWomenVaccineDetails;
    }
  }

  //AN40085822 23/10/2021 Integrating Multilingual Functionality --Start--
ngDoCheck(){
  this.fetchLanguageResponse();
}

fetchLanguageResponse() {
  this.languageComponent = new SetLanguageComponent(this.httpServiceService);
  this.languageComponent.setLanguage();
  this.currentLanguageSet = this.languageComponent.currentLanguageObject; 
}
//--End--
}
