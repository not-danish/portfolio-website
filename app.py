from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return(render_template("index.html"))

@app.route('/projects')
def projects():
    projects = [
             {
            'topic': 'Linear Regression | R',
            'title': 'Constructing a Model to Predict Video Game Sales',
            'subtitle': 'This dataset has information like the sales and playtime of video games that were released between 2004 and 2010. The project modelled the factors that influence video game sales. Remedial measures were considered. ',
            'link': 'https://drive.google.com/file/d/1pqRce6UJN-hYPaUcEfXN7992nLzvFveB/view?usp=sharing'
        },
        {
            'topic': 'Logistic Regression | R',
            'title': 'What Factors predict Credit Status?',
            'subtitle': 'In this project, we used multiple logistic regression to predict the credit status of an individual, which is a multimonial categorical variable. Various models were compared and remedial measures were considered. ',
            'link': 'https://drive.google.com/file/d/1Tx4tjKsiXQ79JsNwZTsw3FhrJcNIissD/view?usp=sharing'
        },
        {
            'topic': 'Random Forest | R',
            'title': 'Identifying Celestial Bodies based on Data',
            'subtitle': 'Using Random forest, I created a model that predicts whether an object observed by a telescope is a star, galaxy or pulsar. Based on the training data, our model achieved a 97.3% accuracy. ',
            'link': '/celestial'
        }
    ]

    return(render_template("projects.html", 
                           projects = projects))

@app.route("/celestial")
def celestial():
    return(render_template("celestial_body.html"))


@app.route("/experience")
def experience():
    return(render_template("experience.html"))


app.run(
    host="0.0.0.0", port=5000
    #debug = True
        )