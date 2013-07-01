sortingDemo
===========

sortingDemo.html is our homepage which links to sortingDemoBubble.html and sortingDemoInsert.html.

demoGraphBubble.js and demoGraphInsert.js are the files responsible for creating and animating the D3 graphs.

bubbleQuiz.js contains two test questions for the bubble sort.

demoData.tsv contains a table of all the data displayed on the graph.

all .py files read in the demoData.tsv to generate the corresponding file - bubbleSort_increase.js, bubbleSort_decrease.js, insertSort_increase.js, and insertSort_decrease.js.

bubbleSort_increase.js keeps an array for all the intermediate states of the increasing-order bubble sort, while bubbleSort_decrease.js keeps all the intermediate states for the decreasing-order bubble sort.  bubbleSort_increase.js has documention to understand the organization of the arrays within the file.  These files are read by demoGraphBubble.js and are necessary to animate the D3 graphs.

insertSort_increase.js keeps an array for all the intermediate states of the increasing-order insertion sort, while insertSort_decrease.js keeps all the intermediate states for the decreasing-order bubble sort.  These files are read by demoGraphBubble.js and are necessary to animate the D3 graphs.

sortingDemo.css is for embellishing components of our webpage.