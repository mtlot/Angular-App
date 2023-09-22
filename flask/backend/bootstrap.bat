SET FLASK_APP=./src/main.py
pipenv shell
export FLASK_DEBUG=1
flask run -h localhost -p 4999
