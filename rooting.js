const vegetables = [
  {
	  submitter: 'Old Man Franklin',
	  redness: 10,
	  plumpness: 5
  },
  {
	  submitter: 'Sally Tomato-Grower',
	  redness: 12,
	  plumpness: 8
  },
  {
	  submitter: 'Hamid Hamidson',
	  redness: 4,
	  plumpness: 3
  }
];
  
const judgeVegetable = function(vegetables, metric) {
  largestMetric = 0;
  let champ;
  for (let i = 0; i < vegetables.length; i++) {
    if (largestMetric < vegetables[i][metric]) {
      largestMetric = vegetables[i][metric];
      champ = vegetables[i]['submitter'];
    }
  }
  return champ;

};


const metric = 'redness';
  
//console.log(judgeVegetable(vegetables, 'redness'));
console.log(judgeVegetable(vegetables, metric));
//console.log(vegetables[1].redness)