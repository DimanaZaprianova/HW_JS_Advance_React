/* -------------------------------- I-st TASK -------------------------------- */

// // Given is an array of users: users = ["Maria", "Ada", "Ivan"];
// // Task: write the code which will create a NEW ARRAY (i.e. do not change the users array), with alphabetically sorted (in ascending order) elements of users array.

// users = ["Maria", "Ada", "Ivan"];

// /* -------------------------- YOUR CODE STARTS HERE ------------------------- */
// let usersSortedAlphabetically = (arr) => (JSON.parse(JSON.stringify(arr))).sort();


// /* --------------------------- YOUR CODE ENDS HERE -------------------------- */

// // TEST CASE (do not modify):
// console.log(`users:\n\t${users}\n`);
// console.log(`usersSortedAlphabetically:\n\t${usersSortedAlphabetically(users)}`);

// /* -------------------------------------------------------------------------- */
// /*                              EXPECTED OUTPUT:                              */
// /* -------------------------------------------------------------------------- */
// // users:
// //  Maria,Ada,Ivan
// //
// // usersSortedAlphabetically:
// //  Ada,Ivan,Maria

/* ------------------------------- II-nd TASK ------------------------------- */

// Given is an array of todos objects:
const todos = [
	{
		title:'Todo1',
		completed: true,
		priority:'low'
	},
	{
		title:'Todo2',
		completed: false,
		priority:'low'
	},
	{
		title:'Todo3',
		completed: true,
		priority:'high'
	},
	{
		title:'Todo4',
		completed: true,
		priority:'medium'
	},
	{
		title:'Todo5',
		completed: false,
		priority:'high'
	},
	{
		title:'Todo6',
		completed: true,
		priority:'low'
	},
]

// Task: write a function: sortArrayByKey(arr), which will return a new array in which the elements of todos array will be sorted by key (property) in ascending order.

/* -------------------------- YOUR CODE STARTS HERE ------------------------- */
let sortArrayByKey = function (arr, key){
        let processedArr = JSON.parse(JSON.stringify(arr));
        return processedArr.sort((a, b) => {
                if (((a === 'medium') && (b === 'high'))||((a === 'low') && (b === 'medium'||'high'))) {
                  return -1;
                }
                if (((a === 'high') && (b === 'low'||'medium'))||((a === 'medium') && (b === 'low'))) {
                    return 1;
                  }
                // a must be equal to b
                return 0;
            });
              
        }
        
    

/* --------------------------- YOUR CODE ENDS HERE -------------------------- */

// TEST CASE (do not modify):
console.log( sortArrayByKey(todos, 'priority'))

// EXPECTED OUTPUT:
// [
// 	{ title: 'Todo3', completed: true, priority: 'high' },
// 	{ title: 'Todo5', completed: false, priority: 'high' },
// 	{ title: 'Todo1', completed: true, priority: 'low' },
// 	{ title: 'Todo2', completed: false, priority: 'low' },
// 	{ title: 'Todo6', completed: true, priority: 'low' },
// 	{ title: 'Todo4', completed: true, priority: 'medium' }
// ]
