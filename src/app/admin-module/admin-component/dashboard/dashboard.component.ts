import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType, ChartData } from 'chart.js';
import { ProductApiService } from 'src/app/shared-service/product-api/product-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataComefromProductService:any;
  constructor(
    private getProductService:ProductApiService
  ) {
   }

  ngOnInit(): void {
    this.allProducts()
  }

  // ********************* ||💗💗💗|| ************************//
  allProducts(){
    this.dataComefromProductService = this.getProductService.getProduct().subscribe((res:any)=>{
      this.dataComefromProductService = res.Result;
    })
  }
// ********************* ||💗💗💗|| ************************//

//********************* || 👍👍👍 || ***************************//
public lineChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [ 65, 59, 80, 81, 56, 55, 40 ],
      label: 'Series A',
      backgroundColor: 'rgb(157, 11, 11)',
      borderColor: 'yellow',
      pointBackgroundColor: 'orange',
      pointBorderColor: 'green',
      pointHoverBackgroundColor: 'red',
      pointHoverBorderColor: 'yellow',
      fill: 'origin',
    },
    {
      data: [ 28, 48, 40, 19, 86, 27, 90 ],
      label: 'Series B',
      backgroundColor: 'yellow',
      borderColor: 'rgb(232, 118, 118)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: 'rgb(232, 118, 118)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)',
      fill: 'origin',
    },
    {
      data: [ 183, 1770, 750, 700, 9000, 370, 1200 ],
      label: 'Series D',
      yAxisID: 'y-axis-1',
      backgroundColor: 'red',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      fill: 'origin',
    }
  ],
  labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ]
};
// *************************************************************************************************************************//

public lineChartOptions: ChartConfiguration['options'] = {
  elements: {
    line: {
      tension: 0.5
    }
  },
  scales: {
    // We use this empty structure as a placeholder for dynamic theming.
    x: {},
    'y-axis-0':
      {
        position: 'left',
      },
    'y-axis-1': {
      position: 'right',
      grid: {
        color: 'orange',
      },
      ticks: {
        color: 'blue'
      }
    }
  },

}
public lineChartType: ChartType = 'line';



//********************* || 👍👍👍 || ***************************//


//********************* || 👍👍👍 || ***************************//
// Radar
public radarChartOptions: ChartConfiguration['options'] = {
  responsive: true,
};
public radarChartLabels: string[] = [ 'See', 'Wishlist', 'Purchase', 'Order', 'Pending', 'New', 'Stock' ];

public radarChartData: ChartData<'radar'> = {
  labels: this.radarChartLabels,
  datasets: [
    { data: [ 65, 59, 90, 81, 56, 55, 40 ], label: 'Series A', 
    backgroundColor: 'rgb(154, 237, 172)',
    borderColor: 'rgb(25, 255, 0)',
    fill: 'origin', },
    { data: [ 28, 48, 40, 19, 96, 27, 100 ], label: 'Series B',
    backgroundColor: 'rgb(244, 247, 170)',
    borderColor: 'yellow' },
    { data: [ 60, 70, 40, 62, 76, 78, 45 ], label: 'Series C',
    backgroundColor: 'rgb(247, 140, 140)',
    borderColor: 'red',
    fill: 'origin'  }
  ]
};
public radarChartType: ChartType = 'radar';
//********************* || 👍👍👍 || ***************************//



}
