import { Component, OnInit } from '@angular/core';
import { Zaehlerstand } from 'src/app/core/models/zaehlerstand.model';

@Component({
  selector: 'app-controlling',
  templateUrl: './controlling.component.html',
  styleUrls: ['./controlling.component.sass']
})
export class ControllingComponent implements OnInit {
  data: Zaehlerstand[] = [{"id":"0f151cbe-cf1e-4353-870c-9639d9afe4e9","zaehlerstandstyp":"MOTOR1","date":"2021-10-20 11:20:00.000","value":98,"id_schiff":"1","betriebsstunden":0},{"id":"106B7787-F1F4-49FB-84F7-18701A57E7F8","zaehlerstandstyp":"MOTOR1","date":"2021-08-05 11:35:22.000","value":111,"id_schiff":"1","betriebsstunden":0},{"id":"953AF084-0F7D-41B9-88F6-22642BA3FE14","zaehlerstandstyp":"MOTOR1","date":"2021-08-05 11:37:11.000","value":2225,"id_schiff":"2","betriebsstunden":0},{"id":"95BD019E-CB2C-4F29-8AC0-BC0C65D36A6C","zaehlerstandstyp":"MOTOR1","date":"2021-08-05 11:41:19.000","value":12,"id_schiff":"4","betriebsstunden":0},{"id":"CCAE4AAB-C1FF-4479-BF77-09E643415767","zaehlerstandstyp":"MOTOR1","date":"2021-08-05 11:40:00.000","value":222,"id_schiff":"3","betriebsstunden":0},{"id":"ff6729e2-27ea-4b3a-9339-f9fd8f532146","zaehlerstandstyp":"MOTOR1","date":"2021-11-18 10:36:00.000","value":125,"id_schiff":"1","betriebsstunden":0},{"id":"A169905E-4BB7-487C-9C40-886CAE6B9C9E","zaehlerstandstyp":"MOTOR2","date":"2021-08-05 11:37:11.000","value":221,"id_schiff":"2","betriebsstunden":0},{"id":"a8c23e2b-76d1-47a1-aecb-13526c6ad7ff","zaehlerstandstyp":"MOTOR2","date":"2021-09-16 09:35:22.000","value":76,"id_schiff":"1","betriebsstunden":0},{"id":"83F6A299-54D7-434D-8E1F-F5C6D59A76A9","zaehlerstandstyp":"MOTOR2","date":"2021-08-05 11:41:19.000","value":12,"id_schiff":"4","betriebsstunden":0},{"id":"2F3DD979-7063-4633-AEBF-B134C001AF1E","zaehlerstandstyp":"MOTOR2","date":"2021-08-05 11:40:00.000","value":221,"id_schiff":"3","betriebsstunden":0},{"id":"535393CF-6D8C-4B7D-992D-9CB36477DD1F","zaehlerstandstyp":"MOTOR2","date":"2021-08-05 11:35:22.000","value":111,"id_schiff":"1","betriebsstunden":0},{"id":"7D217DCF-C786-47AB-AACC-6DAE8DD93D67","zaehlerstandstyp":"EINSATZZEIT","date":"2021-08-05 11:35:22.000","value":4,"id_schiff":"1","betriebsstunden":0},{"id":"26ab6100-36d4-4093-9117-d944ae215274","zaehlerstandstyp":"EINSATZZEIT","date":"2021-09-16 09:35:22.000","value":532,"id_schiff":"1","betriebsstunden":0},{"id":"9A2919DD-7367-418E-AA82-412BD24012E3","zaehlerstandstyp":"EINSATZZEIT","date":"2021-08-05 11:41:20.000","value":322,"id_schiff":"4","betriebsstunden":0},{"id":"A211A5F6-60ED-4933-A240-CA51A92BDDBF","zaehlerstandstyp":"EINSATZZEIT","date":"2021-08-05 11:37:11.000","value":14,"id_schiff":"2","betriebsstunden":0},{"id":"D4ED0638-662B-4237-ADA4-16D30D6EF01F","zaehlerstandstyp":"EINSATZZEIT","date":"2021-08-05 11:40:00.000","value":3,"id_schiff":"3","betriebsstunden":0},{"id":"0AA8AF7E-C0EB-4D69-AD20-A31A0646C876","zaehlerstandstyp":"MOTOR3","date":"2021-08-05 11:41:20.000","value":12,"id_schiff":"4","betriebsstunden":0},{"id":"92AF9181-65DC-4AA9-BF89-6DB12B101D17","zaehlerstandstyp":"MOTOR3","date":"2021-08-05 11:40:00.000","value":221,"id_schiff":"3","betriebsstunden":0}]
  
  constructor() { }

  ngOnInit(): void {
    
  }

  download() {
    let str: string = this.jsonToCSV(this.data, true)
    let blob: Blob = new Blob([str], { type: 'text/csv; charset=utf-8' })

    let a = document.createElement('a')
    var url = URL.createObjectURL(blob);
    a.href = url;
    a.download = 'data';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

  jsonToCSV(data: any[], header: boolean = true): string {
    let csv_string: string = ''
    // header
    if (header) {
      csv_string += Object.keys(data[0]).toString() + '\r\n'
    }
    // data
    data.forEach(object => {
      let arr = Object.values(object)
      csv_string += arr.toString() + '\r\n'
    })
    return csv_string
  }

}
