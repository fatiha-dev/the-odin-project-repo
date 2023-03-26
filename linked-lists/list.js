let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function listPrint(list) {
    let temp= list;
    temp.forEach(temp => {
        console.log(temp.value)
        temp = temp.next;
    });
    // while(temp) {
    //     console.log(temp.value)
    //     temp = temp.next;
    // }

}
listPrint(list)