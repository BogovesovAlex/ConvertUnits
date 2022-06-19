export const questionJson = {
    "start" : "q1",
    "q1": {
        "text": "What is your marital status?",
        "answer": [{"text": "Single", "next_q": "q2"}, {"text": "Married", "next_q": "q3"}]
    },
    "q2": {
        "text": "Are you planning on getting married next year?",
        "answer": [{"text": "Yes", "next_q": false}, {"text": "No", "next_q": false}]
    },
    "q3": {
        "text": "How long have you been married?",
        "answer": [{"text": "Less than a year", "next_q": false}, {"text": "More than a year", "next_q": "q4"}]
    },
    "q4": {
        "text": "Have you celebrated your one year anniversary?",
        "answer": [{"text": "Yes", "next_q": false}, {"text": "No", "next_q": false}]
    }
}

