export default function CategoriesCounter({currEvents, categories}) {
    return (
        <>
            <div className="counter">  
                <i className="count" id="1">{currEvents.filter( event => event.cause_id === 1 ).length}</i>
                <i className="count" id="6">{currEvents.filter( event => event.cause_id === 6 ).length}</i>
                <i className="count">{currEvents.filter( event => event.cause_id === 3 ).length}</i>
                <i className="count">{currEvents.filter( event => event.cause_id === 2 ).length}</i>
                <i className="count">{currEvents.filter( event => event.cause_id === 5 ).length}</i>
                <i className="count">{currEvents.filter( event => event.cause_id === 4 ).length}</i>
                <i className="count">{currEvents.filter( event => event.cause_id === 7 ).length}</i>
            </div>
        </>
    )
}