const axios = require('axios');

async function generateSurveyQuestions() {
  const prompt = "Generate a list of survey questions for dads trying to be better fathers, focusing on their children, home life, spouse, and relationships. The questions should be suitable for multiple choice and fill-in-the-blank answers.";

  const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
    prompt: prompt,
    max_tokens: 200,
    n: 1,
    stop: ["\n", "###"],
    temperature: 0.7,
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  return response.data.choices[0].text.trim().split('\n').map(question => ({
    title: question,
    type: 'MULTIPLE_CHOICE', 
  }));
}

generateSurveyQuestions().then(questions => console.log(questions));
