#!/bin/bash
export FLASK_APP=./src/main.py
source C:/Users/mtlot/.virtualenvs/backend-j9EjLFCY/Scripts/activate
#source $(pipenv --venv)/bin/activate
export FLASK_DEBUG=1
flask run -h localhost -p 4999
#flask run -h 127.0.0.1