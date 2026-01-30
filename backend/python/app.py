from flask import Flask

app = Flask(__name__)

@app.route("/test")
def hello():
    print("HI From Python")
    return "HI from data from python to TS"