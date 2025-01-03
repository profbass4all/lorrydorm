interface PaginateButtonType {
    handlePrev: ()=> void
    handleNext: ()=> void
    NumberOfPages: number
    pageNumber: number
}
function PaginationButton({handlePrev, handleNext, NumberOfPages, pageNumber }: PaginateButtonType) {
    return (
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', gap: '1.5em', marginBottom:'2em', marginTop: '1.5em' }}>
            <button disabled={pageNumber === 1} style={{cursor: pageNumber === 1 ? 'not-allowed' : '' }} className="bg-orange-400 px-4 py-1 text-xl text-white rounded-xl" onClick={handlePrev}>Prev</button>
            <p>{pageNumber}/{NumberOfPages}</p>
            <button disabled={pageNumber === NumberOfPages} style={{cursor: pageNumber === NumberOfPages ? 'not-allowed' : '' }} className="bg-orange-400 px-4 py-1 text-xl text-white rounded-xl" onClick={handleNext}>Next</button>
        </div>
    )
}

export default PaginationButton
