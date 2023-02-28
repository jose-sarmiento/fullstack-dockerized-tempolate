FROM python:slim-bullseye
WORKDIR /app
COPY requirements.txt /app/
RUN pip install -r requirements.txt
COPY . .
EXPOSE 3001
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "3001", "--reload"]