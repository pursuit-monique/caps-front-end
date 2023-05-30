export default function CategoriesCounter({ currEvents, category }) {
    const active = (event) => {
       if (!!category.id){
            if (category.id == event) {
                return `count active`;
            }
            else {
                return `count hidden`;
            }
       } else {
        return "count";
       }
    //   return !!categories.id && categories.id  === event.cause_id ? "count" : "";
    };
  console.log(category)
    return (
      <div className="counter">
        <i className={active( 1 )} id="1">
          {currEvents.filter((event) => event.cause_id === 1).length}
        </i>
        <i className={active( 6 )} id="6">
          {currEvents.filter((event) => event.cause_id === 6).length}
        </i>
        <i className={active( 3 )} id="3">
          {currEvents.filter((event) => event.cause_id === 3).length}
        </i>
        <i className={active( 2 )} id="2">
          {currEvents.filter((event) => event.cause_id === 2).length}
        </i>
        <i className={active( 5 )} id="5">
          {currEvents.filter((event) => event.cause_id === 5).length}
        </i>
        <i className={active( 4 )} id="4">
          {currEvents.filter((event) => event.cause_id === 4).length}
        </i>
        <i className={active( 7 )} id="7">
          {currEvents.filter((event) => event.cause_id === 7).length}
        </i>
      </div>
    );
  }
  

