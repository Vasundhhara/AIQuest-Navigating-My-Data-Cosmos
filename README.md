# AIQuest: Navigating My Data Cosmos

Welcome to AIQuest, a personal search engine for your personal data. The name "AIQuest" signifies a quest fueled by artificial intelligence, leading to new realms within your personal data. Imagine embarking on an odyssey through the vast expanse of your data universe, guided by the power of AI-driven insights and intelligent navigation.
The term "Navigating My Data Cosmos" captures the essence of a voyage that brings forth insights, patterns, and connections, in your data that your collected over time, all while respecting your unique interests and preferences.

## Colab Notebook

Check out the [Colab Notebook](https://github.com/Vasundhhara/AIQuest-Navigating-My-Data-Cosmos/blob/main/semantic_search_engine.ipynb) for a step-by-step guide on how to build and explore your AIQuest engine.

## API Endpoints

1. Backend API for querying specific data: Launch the backend API for querying specific data using `index.js`and test the api on [Postman](https://www.postman.com/) in the following example format:
   
   `http://localhost:3000/getByDirectionAndDate?direction=OUTGOING&date=8/4/23`
   
   `http://localhost:3000/getByFistName?firstName=name`

2. Backend API for semantic search: Launch the backend API for semantic search using `search_engine.py` and the test the api in the following example format:

   `http://localhost:8000/semantic_search?query=query`

## Design Document
Check out the [design document](https://github.com/Vasundhhara/AIQuest-Navigating-My-Data-Cosmos/blob/main/design_document.pdf) for detailed code explanation.

## Resources
Once you have the raw text, follow the [docs from OpenAI](https://platform.openai.com/docs/guides/embeddings/what-are-embeddings) to make an embeddings column in the csv.
Use the [Pinecone documentation](https://docs.pinecone.io/) to get help on upserting data.

## Contact

For any inquiries, contributions or feedback, please connect with me on linkedIn: https://www.linkedin.com/in/vasundhhara-katoch-a72299169/
