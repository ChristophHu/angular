import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Checklistitem } from 'src/app/core/models/checklistitem.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { Animations } from 'src/app/shared/animations'
import { Checklist } from 'src/app/core/models/checklist.model';

@Component({
  selector: 'app-checkliste-modal',
  templateUrl: './checkliste-modal.component.html',
  styleUrls: ['./checkliste-modal.component.sass'],
  animations   : Animations
})
export class ChecklisteModalComponent implements OnInit {
  @ViewChild('modalComponent') modal: | ModalComponent<ChecklisteModalComponent> | undefined;
  title: string = ''

  show: boolean = false
  checklistitemForm: FormGroup
  item: Checklistitem = { id: '', name: '', anzahl: '', seriennummern: '', checked: false, relevant: false, benachrichtigen: '' }

  // id: string
  // name: string
  // anzahl: string
  // seriennummern: string
  // checked: boolean
  // relevant: boolean
  // benachrichtigen: string

  // getFEM()
  kat: Checklistitem[] = [
    // { id: "75764649-769b-4935-848c-25ccb213cf56", bezeichnung: "Anhaltestab" },
    // { id: "a6a9a323-89b8-45a5-96d8-61866c4a0cef", bezeichnung: "Alkomat" },
    // { id: "bd34d03c-3728-4df3-9ba7-7ead0d575532", bezeichnung: "Anker" },
    // { id: "c6aac15c-4fea-49ce-943b-21070169f361", bezeichnung: "Rettungsring" }
  ]

  fem: any[] = [["a6a9a323-89b8-45a5-96d8-61866c4a0ce1","Monitor"],["a6a9a323-89b8-45a5-96d8-61866c4a0cef","Alkomat"],["75764649-769b-4935-848c-25ccb213cf56","Anhaltestab"],["bd34d03c-3728-4df3-9ba7-7ead0d575532","Anker"],["c6aac15c-4fea-49ce-943b-21070169f361","Rettungsring"]]

  // teil des geraetebuchs
  result: any[] = [
    {
       "id":"75764649-769b-4935-848c-25ccb213cf56",
       "name":"Anhaltestab",
       "anzahl":"3",
       "seriennummern":"",
       "sonstiges":"",
       "checked": false,
       "relevant": false, 
       "benachrichtigen": ""
    },
    {
       "id":"a6a9a323-89b8-45a5-96d8-61866c4a0cef",
       "name":"Alkomat",
       "anzahl":"1",
       "seriennummern":"SN-1234",
       "checked": false,
       "relevant": false, 
       "benachrichtigen": ""
    },
    {
       "id":"bd34d03c-3728-4df3-9ba7-7ead0d575532",
       "name":"Anker",
       "anzahl":"2",
       "seriennummern":"",
       "checked": false,
       "relevant": false, 
       "benachrichtigen": ""
    },
    {
       "id":"c6aac15c-4fea-49ce-943b-21070169f361",
       "name":"Rettungsring",
       "anzahl":"1",
       "seriennummern":"",
       "checked": false,
       "relevant": false, 
       "benachrichtigen": ""
    }
 ]
// getGeraetebuch(id_Schiff)
 geraetebuch: any[] = [
    {
      "id_schiff":"1",
      "einsatzmittel":[
        {
          "id":"75764649-769b-4935-848c-25ccb213cf56",
          "name":"Anhaltestab",
          "anzahl":"3",
          "seriennummern":"",
          "checked": false,
          "relevant": false, 
          "benachrichtigen": ""
       },
       {
          "id":"a6a9a323-89b8-45a5-96d8-61866c4a0cef",
          "name":"Alkomat",
          "anzahl":"1",
          "seriennummern":"SN-1234",
          "checked": false,
          "relevant": false, 
          "benachrichtigen": ""
       },
       {
          "id":"bd34d03c-3728-4df3-9ba7-7ead0d575532",
          "name":"Anker",
          "anzahl":"2",
          "seriennummern":"",
          "checked": false,
          "relevant": false, 
          "benachrichtigen": ""
       },
       {
          "id":"c6aac15c-4fea-49ce-943b-21070169f361",
          "name":"Rettungsring",
          "anzahl":"1",
          "seriennummern":"",
          "checked": false,
          "relevant": false, 
          "benachrichtigen": ""
       }
      ]
  }
 ]

 // getLastChecklist(id_schiff)
 lastChecklist: Checklist[] = [
  {
     "id_schiff":"1",
     "streife":"3f7bc091-9f3d-428b-bf57-429f7dba25da",
     "datum":"2021-12-08 09:57:23.000",
    //  "gbookdaten":"{\"id_schiff\":\"1\",\"einsatzmittel\":[{\"id\":\"c6aac15c-4fea-49ce-943b-21070169f361\",\"name\":\"Rettungsring\",\"anzahl\":\"1\",\"seriennummern\":\"\",\"sonstiges\":\"true\"},{\"id\":\"a6a9a323-89b8-45a5-96d8-61866c4a0cef\",\"name\":\"Alkomat\",\"anzahl\":\"1\",\"seriennummern\":\"SN-1234\",\"sonstiges\":\"true\"},{\"id\":\"75764649-769b-4935-848c-25ccb213cf56\",\"name\":\"Anhaltestab\",\"anzahl\":\"3\",\"seriennummern\":\"\",\"sonstiges\":\"true\"},{\"id\":\"bd34d03c-3728-4df3-9ba7-7ead0d575532\",\"name\":\"Anker\",\"anzahl\":\"2\",\"seriennummern\":\"123\",\"sonstiges\":\"true\"}]}",
     "gbookdaten":"{\"id_schiff\":\"1\",\"einsatzmittel\":[{\"id\":\"75764649-769b-4935-848c-25ccb213cf56\",\"name\":\"Anhaltestab\",\"anzahl\":\"3\",\"seriennummern\":\"\",\"checked\":true,\"relevant\":true,\"benachrichtigen\":\"\"},{\"id\":\"a6a9a323-89b8-45a5-96d8-61866c4a0cef\",\"name\":\"Alkomat\",\"anzahl\":\"1\",\"seriennummern\":\"SN-1234\",\"checked\":false,\"relevant\":false,\"benachrichtigen\":\"\"},{\"id\":\"bd34d03c-3728-4df3-9ba7-7ead0d575532\",\"name\":\"Anker\",\"anzahl\":\"2\",\"seriennummern\":\"\",\"checked\":false,\"relevant\":false,\"benachrichtigen\":\"\"},{\"id\":\"c6aac15c-4fea-49ce-943b-21070169f361\",\"name\":\"Rettungsring\",\"anzahl\":\"1\",\"seriennummern\":\"\",\"checked\":false,\"relevant\":true,\"benachrichtigen\":\"\"}]}"
  }
]
  
  constructor(private _formBuilder: FormBuilder, private _modalService: ModalService<ChecklisteModalComponent>) {
    this.checklistitemForm = this._formBuilder.group({
      id: [],
      name: [],
      anzahl: [],
      seriennummern: [],
      checked: [],
      relevant: [],
      benachrichtigen: []
    })
  }

  ngOnInit(): void {
    this._modalService.getData().then((data) => {
      this.title = data.data.title
      // this.peilungForm.patchValue({ date: data.data.date })
    })

    this.array2obj(this.fem)
    this.load()
  }

  load() {
    // getLastChecklist(id_schiff).gbookdaten
    const gbook: any = JSON.parse(this.lastChecklist[0].gbookdaten)
    const einsatzmittel: Checklistitem[] = gbook.einsatzmittel

    // getAll
    const key = 'id'
    let checkliste: Checklistitem[] = [...this.kat, ...einsatzmittel]
    this.kat = [...new Map(checkliste.map(item => [item[key], item])).values()]
  }

  array2obj(arr: any) {
    arr.forEach((el: any) => {
      this.kat.push({ id: el[0], name: el[1], anzahl: '', seriennummern: '', checked: false, relevant: false, benachrichtigen: '' })
    });
  }

  loadItem(id: string) {
    const item = this.kat.find(el => el.id == id)!
    this.checklistitemForm.patchValue(item)
    this.show = !this.show
  }
  setItem() {
    const i: Checklistitem = this.checklistitemForm.value
    this.kat = this.kat.filter(el => el.id != i.id)
    this.kat.push(i)
    this.show = !this.show
  }

  create() {
    const gbook: string = JSON.stringify(this.kat.filter(el => el.checked == true))
    const newChecklist: Checklist = { id_schiff: this.checklistitemForm.value.id, streife: this.checklistitemForm.value.streife, datum: new Date().toISOString(), gbookdaten: gbook }
    console.log(newChecklist)
  }

  update() {

  }

  cancel() {
    this.modal?.close()
  }
}
