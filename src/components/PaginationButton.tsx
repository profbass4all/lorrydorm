interface PaginateButtonType {
    handlePrev: ()=> void
    handleNext: ()=> void
    NumberOfPages: number
    pageNumber: number
}
function PaginationButton({handlePrev, handleNext, NumberOfPages, pageNumber }: PaginateButtonType) {
    return (
        <div className="flex justify-center items-center gap-6 mb-8 mt-6">

            <button disabled={pageNumber === 1} style={{cursor: pageNumber === 1 ? 'not-allowed' : '' }} 
                className="bg-orange-400 px-4 py-1 text-xl text-white rounded-xl" onClick={handlePrev}>Prev</button>

            <p className="text-2xl text-orange-700 font-medium">{pageNumber}/{NumberOfPages}</p>


            <button disabled={pageNumber === NumberOfPages} style={{cursor: pageNumber === NumberOfPages ? 'not-allowed' : '' }} 
            
                className="bg-orange-400 px-4 py-1 text-xl text-white rounded-xl" onClick={handleNext}>Next</button>
        </div>
    )
}

export default PaginationButton
