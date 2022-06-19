import {getConverUnits} from './components/task1/getConverUnits.js'
import {taskJson} from './API/jsonTask_1.js'
import {getResaultSortedAndFiltered} from './components/task2/getResaultSortedAndFiltered.js'
import {dataJson} from './API/jsonTask_2.js'
import {getResulQuiz} from './components/task3/getResulQuiz.js'
import {questionJson} from './API/jsonTask_3.js'

getConverUnits(taskJson);
console.log(getConverUnits(taskJson))

getResaultSortedAndFiltered(JSON.stringify(dataJson))
console.log(getResaultSortedAndFiltered(JSON.stringify(dataJson)))

getResulQuiz(JSON.stringify(questionJson))
console.log(getResulQuiz(JSON.stringify(questionJson)))