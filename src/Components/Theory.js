function Theory(){
    return (
        <div className="theory-body" id="main-theory-body">
            <h1>Stack</h1>
            <div className="ds">Data Structure</div>
            <div className="ds">LIFO</div>
            <div className="ds">FILO</div>
            <p>Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out). LIFO implies that the element that is inserted last, comes out first and FILO implies that the element that is inserted first, comes out last.</p>
            <p>There are many real-life examples of a stack. Consider an example of plates stacked over one another in the canteen. The plate which is at the top is the first one to be removed, i.e. the plate which has been placed at the bottommost position remains in the stack for the longest period of time. So, it can be simply seen to follow LIFO(Last In First Out)/FILO(First In Last Out) order.</p>
        </div>
    );
}

export default Theory;