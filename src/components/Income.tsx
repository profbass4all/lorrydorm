// import BarChart from './BarChart'
import { Bar } from "react-chartjs-2";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from "chart.js";
import { transaction } from "../data";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Income',
            data: transaction.map(item=> `${item.amount/1000}`),
            backgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56",
                      "#4BC0C0",
                      "#9966FF",
                      "#FF9F40",
                    ], // Bar colors
            borderRadius: 5,
            hoverBackgroundColor: '#FF8C38'
          },
        ],
      } 

const Income = () => {

  const transactionElement = transaction.map(item =>{
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', height: '6.75rem', backgroundColor: '#fff', alignItems: 'center',  marginBottom:"1.5em", padding: '0 2em', borderRadius: '5px'}}>
          <p style={{fontWeight: '700', fontSize: '2rem'}}>${item.amount}</p>
          <p style={{fontWeight: '500', fontSize: '1.25rem', color:'#4d4d4d'}}>{item.date}</p>
        </div>
    )
  })


  return (
    <div  style={{width: '90%',}}  className="mx-auto mt-12">
      <h2 style={{fontWeight: '800', fontSize: '2.5rem'}} className="mb-4">Income</h2>
      <p style={{color: '#4d4d4d', fontWeight: '500'}} className="mb-4">Last <span style={{fontWeight: '600', borderBottom: '2px solid #4d4d4d', paddingBottom:'1  px'}}>1 year</span></p>
      <p style={{fontWeight: '800', fontSize: '2.5rem'}} className="mb-4" >$2,260</p>
      <Bar data={data} options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            tooltip: {
              callbacks: {
                label: (tooltipItem) => {
                  // Format the tooltip to include a dollar sign
                  return `$${tooltipItem.raw}k`;
                },
              },
            },
          },
          scales: {
            x:{
              grid: {
                display: false,
              }
            },
            y: {
              beginAtZero: true,
              grid:{
                display: false,
              } ,
              ticks: {
                // Add dollar sign on the y-axis
                callback: (value) => `$${value}k`,
              },// Ensure y-axis starts at 0
            },
          },
        }}/>

        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '2em'}}>
          <h2 style={{fontSize: '1.5rem', fontWeight: '700'}}>Your transactions (3)</h2>
          <p style={{color: '#4d4d4d', fontWeight: '500'}} className="mb-4">Last <span style={{fontWeight: '600'}}>1 year</span></p>
        </div>

        {transactionElement}

    </div>
  )
}

export default Income