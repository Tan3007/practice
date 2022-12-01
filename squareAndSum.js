// Square sum function so that it squares
// each number passed into it and
// then sums the results together

list = [01, 02, 02];

function SnS(list){
  const sq_list = list.map((item)=>{
    return item**2;
  });

  return sq_list.reduce((a, b)  => {
     return (a+b);
  });
}
sq_and_sum = SnS(list);
console.log(sq_and_sum);
