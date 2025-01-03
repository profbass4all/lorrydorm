import { useState } from "react"

export default function usePagination(data: any[] ){

    const [pageNumber, setPageNumber] = useState<number>(1)


    const NumberPerPage = 5
    const NumberOfPages = Math.ceil(data.length/ NumberPerPage)
    const firstElement = (pageNumber - 1) * NumberPerPage
    const lastElement = firstElement + NumberPerPage
    const paginatedPages = data.slice(firstElement, lastElement)

    function handleNext(){

        if(pageNumber < NumberOfPages) {
            setPageNumber(prev => {
            return prev + 1
        })
    }
    
}
    function handlePrev(){
        if(pageNumber > 1){
            setPageNumber(prev =>{
            return prev - 1
        })
    }
}

    return {
        handlePrev,
        handleNext,
        paginatedPages,
        lastElement,
        firstElement,
        NumberOfPages,
        pageNumber,
    }

}