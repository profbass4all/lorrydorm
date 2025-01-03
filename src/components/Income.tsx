// import BarChart from './BarChart'
import { Bar } from "react-chartjs-2";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from "chart.js";
import { useOutletContext } from "react-router-dom";
import { IncomeContext} from '../types'
import usePagination from '../hooks/usePagination'
import PaginationButton from "./PaginationButton";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const Income = () => {

  
  const { 
          transaction, 
          netIncome, 
          loading, 
          error 
        } = useOutletContext<IncomeContext>()


  if(loading || !transaction || !netIncome) {
    return <p>Loading...</p>
  }


  const {
        handlePrev,
        handleNext,
        paginatedPages,
        NumberOfPages,
        pageNumber,
        } = usePagination(transaction)
  
  
  
  if(error){
    return <p>{error}</p>
  }

  
  const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Income',
            data: netIncome.map(item=> `${item.Amount/1000000}`),
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
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
});

  const total = netIncome.reduce((acc, curr)=>{
        return acc + Number(curr.Amount)
      }, 0)

  const transactionElement = paginatedPages.map(item =>{

    return (
        <div key={item.sn} className="flex justify-between w-full h-28 bg-[#fff] items-center mb-6 p-3.5 rounded-2xl">

          <p className='font-bold text-3xl'>{formatter.format(item.amount)}</p>

          <p className="font-medium text-xl text-[#4d4d4d]">{item.date.slice(0, 10)}</p>

        </div>
    )
  })
  
  return (
    <div className="mx-auto mt-12 w-11/12">

      <h2 className="mb-4 font-extrabold text-3xl">Income</h2>

      <p className="mb-4 text-[#4d4d4d] font-medium">Last 
        
        <span className="ml-2 font-semibold pb-2 border-b-solid border-b-[#4d4d4d] border-b-2">1 year</span></p>

      <p className="my-8 font-extrabold text-3xl" >{formatter.format(total)}</p>

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
                callback: (value) => `$${value}m`,
              },// Ensure y-axis starts at 0
            },
          },
        }}/>

        <div className="flex justify-between items-baseline mt-8">

          <h2 className="text-2xl font-bold">Your transactions ({transaction.length + 1})</h2>

          <p className="mb-4 font-medium text-[#4d4d4d]">Last 
            
          <span className="font-semibold">1 year</span></p>

        </div>

        {transactionElement}

        <PaginationButton  
          handlePrev={handlePrev}
          handleNext={handleNext}
          NumberOfPages={NumberOfPages}
          pageNumber={pageNumber}
    />
    </div>
  )
}

export default Income