import { Component, OnInit } from '@angular/core';

import * as PlotlyJS from 'plotly.js-dist-min';

@Component({
  selector: 'app-uebersicht',
  templateUrl: './uebersicht.component.html',
  styleUrls: ['./uebersicht.component.sass']
})
export class UebersichtComponent implements OnInit {

  ngOnInit(): void {
    this.basicChart()
  }

  basicChart() {
    const data: any = [
      {
        type: "sunburst",
        labels: [
          'WSP Ost', 'WSP Mitte', 'WSP West',
          'WSP30 Sturmmöve', 'WSP32 Eisvogel', 'WSP33 Dahme', 'WSP34 Seeschwalbe', 'WSP50 RIB',
          'WSP20 Lietze', 'WSP22 Spree', 'WSP23 Seeadler', 'WSP24 Schwanenwerder',
          'WSP10 Wannsee', 'WSP11 Mollymauk', 'WSP12 Graureiher', 'WSP15 Alk', 'WSP16 Kormoran'
        ],
        parents: ['', '', '',
          'WSP Ost', 'WSP Ost', 'WSP Ost', 'WSP Ost', 'WSP Ost',
          'WSP Mitte', 'WSP Mitte', 'WSP Mitte', 'WSP Mitte',
          'WSP West', 'WSP West', 'WSP West', 'WSP West', 'WSP West'
        ],
        values: [5, 4, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        // labels: ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
        // parents: ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve" ],
        // values:  [65, 14, 12, 10, 2, 6, 6, 4, 4],
        leaf: {"opacity": 0.4},
        marker: {"line": {"width": 2}},
        branchvalues: 'total'
      }
    ]

    const layout: any = {
      width: 384,
      height: 384,
      margin: {
        t: 0, 
        l: 0, 
        r: 0, 
        b: 0
      },
      sunburstcolorway:["#636efa","#ef553b","#00cc96"]
    }

    PlotlyJS.newPlot('c', data, layout);
  }
}
