#!/usr/bin/python3
""" Starts a Flask web application for 1-hbnb """
from flask import Flask, render_template
from models import storage

app = Flask(__name__)


@app.route('/4-hbnb')
def four_hbnb():
    """Render 4-hbnb page"""
    return render_template('4-hbnb.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
