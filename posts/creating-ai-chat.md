---
title: "Creating an AI chat in Python that can search documents (RAG)"
date: "2025-04-03"
excerpt: "How to build a retrieval-augmented generation system with LangChain and Python."
coverImage: "/images/python-ai-chat.jpg"
status: public
---

# Creating an AI chat in Python that can search documents (RAG)

Retrieval-Augmented Generation (RAG) is a powerful technique for building AI systems that can answer questions based on specific documents or knowledge bases. In this tutorial, I'll show you how to build a RAG system using Python, LangChain, and modern LLM APIs.

## What we'll build

We'll create a Python application that:

1. Takes in PDF documents and indexes them
2. Processes natural language questions from users
3. Searches the documents for relevant information
4. Generates accurate answers based on the retrieved content

## Prerequisites

```python
# Install required packages
pip install langchain openai chromadb pypdf tiktoken
```

## Step 1: Document Loading and Chunking

First, we need to load our documents and split them into manageable chunks:

```python
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter

# Load PDF documents
loader = PyPDFLoader("path/to/your/document.pdf")
documents = loader.load()

# Split documents into chunks
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200
)
chunks = text_splitter.split_documents(documents)
```

## Step 2: Create Vector Store

Next, we'll create a vector store to enable semantic search:

```python
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma

# Initialize embeddings
embeddings = OpenAIEmbeddings()

# Create vector store
vectorstore = Chroma.from_documents(
    documents=chunks,
    embedding=embeddings,
    persist_directory="./chroma_db"
)
```

## Step 3: Create Retrieval Chain

Now we can create the retrieval chain to search for information:

```python
from langchain.chains import RetrievalQA
from langchain.chat_models import ChatOpenAI

# Create language model
llm = ChatOpenAI(model_name="gpt-3.5-turbo")

# Create retrieval chain
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=vectorstore.as_retriever(
        search_kwargs={"k": 3}
    )
)
```

## Step 4: Create Chat Interface

Finally, let's create a simple chat interface:

```python
def chat_with_docs():
    print("Welcome to Document Chat! Type 'exit' to quit.")
    while True:
        query = input("You: ")
        if query.lower() == 'exit':
            break
        
        response = qa_chain.run(query)
        print(f"AI: {response}")

# Run the chat interface
if __name__ == "__main__":
    chat_with_docs()
```

## Conclusion

This simple implementation demonstrates the core concepts of RAG. You can extend this system by:

- Adding more document types (web pages, Markdown, etc.)
- Implementing more sophisticated retrieval strategies
- Creating a web UI with Flask or Streamlit
- Supporting conversation history for more context-aware responses

The combination of retrieval and generation creates a powerful AI assistant that can provide accurate, document-grounded responses to user queries. 