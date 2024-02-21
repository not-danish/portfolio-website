from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return(render_template("index.html"))

@app.route('/projects')
def projects():
    return(render_template("projects.html"))


app.run(
    #host="0.0.0.0", port=5000
    debug = True
        )