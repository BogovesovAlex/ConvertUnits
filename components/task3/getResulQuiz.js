export function getResulQuiz(json) {
  const dataJson = JSON.parse(json);

  let result = {
    paths: {
      number: 0,
      list: [],
    },
  };

  let route = [];

  function showTestScript(currentQuestion, optionAnswer, previousQuestion) {
    optionAnswer ? route.push({ [previousQuestion.text]: optionAnswer }) : {};

    let answers = [];
    let localRoute = [...route];

    for (let key in currentQuestion.answer) {
      let { next_q: nextQuestion, text: option } = currentQuestion.answer[key];

      nextQuestion
        ? showTestScript(dataJson[nextQuestion], option, currentQuestion)
        : answers.push(option);
    }

    let answer = answers.join('/');
    if (answer) {
      localRoute.push({ [currentQuestion.text]: answer });

      result.paths.list.push(localRoute);
      route = [];
    }
  }

  for (let key in dataJson) {
    if (key === dataJson.start) {
      showTestScript(dataJson[key]);
    }
  }
  result.paths.number = result.paths.list.length;
  return JSON.stringify(result);
}
